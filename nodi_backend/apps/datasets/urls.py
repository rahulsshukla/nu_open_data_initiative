from .views import DataSetViewSet
from rest_framework.routers import DefaultRouter
from django.urls import include
from django.conf.urls import url

router = DefaultRouter()
router.register('datasets', DataSetViewSet)
# import pdb; pdb.set_trace()

urlpatterns = [
    url(r'^api/', include(router.urls)),
]