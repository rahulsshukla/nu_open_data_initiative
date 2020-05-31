from django.db import models
from .utils.s3 import generate_presigned_get

# Create your models here.
# More fields here: https://docs.djangoproject.com/en/3.0/topics/db/models/#field-types

class DataSet(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    submitted_at = models.DateTimeField(auto_now_add=True)
    approved_at = models.DateTimeField(auto_now_add=True)
    approved = models.BooleanField(default=False)
    
    categories = models.ManyToManyField('datasets.Category')
    datatypes = models.ManyToManyField('datasets.DataType')
    
    key = models.CharField(max_length=100, default=None, null=True)
    bucket = models.CharField(max_length=100, default=None, null=True)
    
    def get_signed_url(self):
        return generate_presigned_get(self.bucket, self.key)

class Category(models.Model):
    name = models.CharField(max_length=100)

class DataType(models.Model):
    name = models.CharField(max_length=100)
    

class MetaData(models.Model):
    publish_date = models.DateTimeField(null=True, default=None)
    department_ownership = models.CharField(max_length=100)
    raw_source_link = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
