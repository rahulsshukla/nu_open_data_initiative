from rest_framework import serializers
from .models import DataSet, MetaData, DataType, Category

class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = ('name',)

class DataTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = DataType
        fields = ('name',)

class MetaDataSerializer(serializers.ModelSerializer):

    class Meta:
        model = MetaData
        fields = ('department_ownership', 'raw_source_link', 'context')

class DataSetSerializer(serializers.ModelSerializer):

    meta_data = MetaDataSerializer()
    class Meta:
        model = DataSet
        fields = ('name', 'email', 'submitted_at')
