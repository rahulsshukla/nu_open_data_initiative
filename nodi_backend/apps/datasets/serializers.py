from rest_framework import serializers
from .models import DataSet, MetaData, DataType, Category


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = ('id', 'name', 'popular', 'icon_name')


class DataTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = DataType
        fields = ('id', 'name')


class MetaDataSerializer(serializers.ModelSerializer):

    class Meta:
        model = MetaData
        fields = ('id', 'department_ownership', 'raw_source_link',
                  'publish_date', 'description')


class DataSetSerializer(serializers.ModelSerializer):
    s3_url = serializers.SerializerMethodField('get_s3_url')
    metadata = MetaDataSerializer()
    datatype = DataTypeSerializer()
    categories = CategorySerializer(many=True)

    class Meta:
        model = DataSet
        fields = ('id', 'name', 'submitted_at', 's3_url',
                  'metadata', 'datatype', 'categories')

    def get_s3_url(self, obj):
        return obj.get_signed_url()
