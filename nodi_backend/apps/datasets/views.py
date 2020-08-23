import json
import os
from django.shortcuts import render, get_object_or_404
from rest_framework import generics, viewsets
from rest_framework.decorators import action
from django.http import JsonResponse, HttpResponseNotFound, HttpResponseBadRequest
from django.views.decorators.csrf import csrf_exempt

from .models import DataSet, Category, DataType, MetaData
from .serializers import DataSetSerializer, CategorySerializer, DataTypeSerializer
from .utils.s3 import generate_presigned_post


class DataSetViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing DataSet instances.
    """
    serializer_class = DataSetSerializer
    queryset = DataSet.objects.filter(approved=True)

    @csrf_exempt
    def list(self, request):
        """
        +GET+
        Gets all datasets
        """
        """
        # TODO: add pagination
        """
        queryset = DataSet.objects.filter(approved=True)
        serializer = DataSetSerializer(queryset, many=True)
        return JsonResponse(serializer.data, safe=False)

    @csrf_exempt
    def retrieve(self, request, pk=None):
        """
        +GET+
        Gets a single dataset
        """
        queryset = DataSet.objects.filter(approved=True)
        dataset = get_object_or_404(queryset, pk=pk)
        serializer = DataSetSerializer(dataset)
        return JsonResponse(serializer.data)

    @csrf_exempt
    def create(self, request):
        """
        +POST+
        Creates a dataset
        """
        body = json.loads(request.body)
        d = DataSet(name=body['name'], email=body['email'],
                    submitted_at=body['submitted_at'], approved=False, bucket=os.environ['DATASETS_BUCKET'], key=body['key'], approved_at=None)
        d.save()

        if 'category_ids' in body and Category.objects.filter(id=body['category_ids']):
            # also consider catching errors when splitting doesn't work
            # * is needed to "splat" and expand queryset into tuples
            d.categories.add(*Category.objects.filter(id=body['category_ids']))

        if 'datatype_id' in body and DataType.objects.filter(id=body['datatype_id']):
            d.datatype = DataType.objects.get(id=body['datatype_id'])
        d.save()
        m = MetaData(
            publish_date=body['metadata']['publish_date'],
            department_ownership=body['metadata']['department_ownership'],
            raw_source_link=body['metadata']['raw_source_link'],
            description=body['metadata']['description'],
            dataset=d,
            key_terms=body['metadata']['key_terms'],
            primary_audience=body['metadata']['primary_audience'],
            purpose=body['metadata']['purpose'],
            decisions=body['metadata']['decisions'],
            resident_expert=body['metadata']['resident_expert'],
            appearances=body['metadata']['appearances'])
        m.save()
        serializer = DataSetSerializer(d)
        return JsonResponse(serializer.data)

    def update(self, request, pk=None):
        """
        +PUT+
        Updates a dataset
        """
        return HttpResponseNotFound("Not Implemented Yet")

    def partial_update(self, request, pk=None):
        """
        +PATCH+
        Updates a dataset
        """
        return HttpResponseNotFound("Not Implemented Yet")

    def destroy(self, request, pk=None):
        """
        +DELETE+
        Updates a dataset
        """
        return HttpResponseNotFound("Not Implemented Yet")

    @ csrf_exempt
    @ action(detail=False, methods=['post'])
    def s3_upload_url(self, request):
        """
        +POST+
        Retrieves an s3 upload url
        """
        body = json.loads(request.body)
        invalid = self.validate_params(body, {"fileType", "fileName"})
        if invalid:
            return invalid
        return JsonResponse(generate_presigned_post(body['fileType'], body['fileName']))

    @csrf_exempt
    @action(detail=False, methods=['get'])
    def search(self, request):
        """
        +GET+
        Searches for a list of datasets
        - titles must have query (in request) as a substring
        - datatypes must be exact match with request
        - categories must include at least one from request
        request example: GET https://nodi-backend.herokuapp.com/api/datasets/search?query=Blahblah&categories=["Finance","Student%20Life"]&datatypes=CSV
        """
        fSet = DataSet.objects.filter(approved=True)
        name = request.query_params.get('query', None)
        datatypes = request.query_params.get('datatypes', [])
        categories = request.query_params.get('categories', [])

        if name:
            wordsinname = name.split(" ")
            for word in wordsinname:
                fSet = fSet.filter(name__icontains=word)

        if datatypes:
            sSet = DataSet.objects.none()
            datatypes = eval(datatypes)
            for dat in datatypes:
                sSet = sSet | fSet.filter(datatype__name__exact=dat)
            fSet = sSet

        if categories:
            sSet = DataSet.objects.none()
            categories = eval(categories)
            for cat in categories:
                sSet = sSet.union(fSet.filter(categories__name__in=[cat]))
            fSet = sSet
        
        

        serializer = DataSetSerializer(fSet, many=True)
        return JsonResponse(serializer.data, safe=False)

    def validate_params(self, body, params):
        """
        Validates params in the body
        """
        missing_params = []
        for param in params:
            if param not in body:
                missing_params.append(param)
        if len(missing_params) != 0:
            return HttpResponseBadRequest("Missing params in body: " + ", ".join(missing_params))
        return False


class CategoryViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing DataSet instances.
    """
    serializer_class = CategorySerializer
    queryset = Category.objects.all()

    @csrf_exempt
    def list(self, request):
        """
        +GET+
        Gets all datasets
        """
        queryset = Category.objects.all()
        serializer = CategorySerializer(queryset, many=True)
        return JsonResponse(serializer.data, safe=False)


class DataTypeViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing DataSet instances.
    """
    serializer_class = DataTypeSerializer
    queryset = DataType.objects.all()

    @csrf_exempt
    def list(self, request):
        """
        +GET+
        Gets all datasets
        """
        queryset = DataType.objects.all()
        serializer = DataTypeSerializer(queryset, many=True)
        return JsonResponse(serializer.data, safe=False)
