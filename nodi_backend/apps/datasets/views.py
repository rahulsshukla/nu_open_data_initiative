from django.shortcuts import render
from .models import DataSet
from .serializers import DataSetSerializer
from rest_framework import generics

# Create your views here.


class DataSetCreate(generics.ListCreateAPIView):
    queryset - DataSet.objects.all()
    serializer_class = DataSetSerializer
