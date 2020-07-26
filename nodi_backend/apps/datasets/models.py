from django.db import models
from .utils.s3 import generate_presigned_get

# Create your models here.
# More fields here: https://docs.djangoproject.com/en/3.0/topics/db/models/#field-types


class DataSet(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    submitted_at = models.DateTimeField(auto_now_add=True)
    approved_at = models.DateTimeField(auto_now_add=False)
    approved = models.BooleanField(default=False)

    categories = models.ManyToManyField('datasets.Category')
    datatype = models.ForeignKey(
        'datasets.DataType', on_delete=models.SET_NULL, null=True)

    key = models.CharField(max_length=100, default=None, null=True)
    bucket = models.CharField(max_length=100, default=None, null=True)

    def get_signed_url(self):
        return generate_presigned_get(self.bucket, self.key)

    def category_list(self):
        return ", ".join([str(cat) for cat in self.categories.all()])
    category_list.short_description = "Categories"

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Dataset"
        verbose_name_plural = "Datasets"

class Category(models.Model):
    name = models.CharField(max_length=100)
    popular = models.BooleanField(default=True)
    icon_name = models.CharField(max_length=100, default=None, null=True)

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = "Category"
        verbose_name_plural = "Categories"

class DataType(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Datatype"
        verbose_name_plural = "Datatypes"

class MetaData(models.Model):
    publish_date = models.DateTimeField(null=True, default=None)
    department_ownership = models.CharField(max_length=100)
    raw_source_link = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    dataset = models.OneToOneField(
        'datasets.DataSet', on_delete=models.CASCADE, related_name='metadata', null=True, default=None)

    def __str__(self):
        return self.dataset.name + " (Metadata)"

    class Meta:
        verbose_name = "Metadata"
        verbose_name_plural = "Metadata"