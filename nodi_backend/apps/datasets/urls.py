from .views import DataSetViewSet, CategoryViewSet, DataTypeViewSet
from rest_framework.routers import DefaultRouter
from django.urls import include
from django.conf.urls import url

router = DefaultRouter(trailing_slash=False)
router.register('datasets', DataSetViewSet)
router.register('categories', CategoryViewSet)
router.register('datatypes', DataTypeViewSet)

urlpatterns = [
    url(r'^api/', include(router.urls)),
]