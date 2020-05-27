import json
from django.shortcuts import render, get_object_or_404
from rest_framework import generics, viewsets
from rest_framework.decorators import action
from django.http import JsonResponse, HttpResponseNotFound, HttpResponseBadRequest

from .models import DataSet
from .serializers import DataSetSerializer
from .utils.s3 import generate_presigned_post

class DataSetViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing DataSet instances.
    """
    serializer_class = DataSetSerializer
    queryset = DataSet.objects.all()

    def list(self, request):
        """
        +GET+
        Gets all datasets
        """
        #TODO: add pagination
        queryset = DataSet.objects.all()
        serializer = DataSetSerializer(queryset, many=True)
        return JsonResponse(serializer.data, safe=False)

    def retrieve(self, request, pk=None):
        """
        +GET+
        Gets a single dataset
        """
        queryset = DataSet.objects.all()
        dataset = get_object_or_404(queryset, pk=pk)
        serializer = DataSetSerializer(dataset)
        return JsonResponse(serializer.data)
    
    def create(self, request):
        """
        +POST+
        Creates a dataset
        """
        return HttpResponseNotFound("Not Implemented Yet")

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
    
    @action(detail=False, methods=['post'])
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
    
    @action(detail=False, methods=['get'])
    def search(self, request):
        """
        +GET+
        Searches for a list of datasets
        @AlexLee Here you go
        """
        return HttpResponseNotFound("Not Implemented Yet")
    
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