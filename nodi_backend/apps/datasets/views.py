from django.shortcuts import render, get_object_or_404
from .models import DataSet
from .serializers import DataSetSerializer
from rest_framework import generics, viewsets
from rest_framework.decorators import action
from django.http import JsonResponse, HttpResponseNotFound

# Create your views here.

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
    def s3_upload_url(self, request, pk=None):
        """
        +POST+
        Retrieves an s3 upload url
        """
        return HttpResponseNotFound("Not Implemented Yet")
    
    @action(detail=False, methods=['get'])
    def search(self, request, pk=None):
        """
        +GET+
        Searches for a list of datasets
        @AlexLee Here you go
        """
        return HttpResponseNotFound("Not Implemented Yet")