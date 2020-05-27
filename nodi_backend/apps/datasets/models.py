from django.db import models

# Create your models here.


class DataSet(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    submitted_at = models.DateTimeField(auto_now_add=True)
    # dataset = ..

# More fields here: https://docs.djangoproject.com/en/3.0/topics/db/models/#field-types
