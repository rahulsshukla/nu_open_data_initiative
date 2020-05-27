from rest_framework import serializers
from .models import DataSet


class DataSetSerializer(serializers.ModelSerializer):
    class Meta:
        model = DataSet
        fields = ('name', 'email', 'submitted_at')
