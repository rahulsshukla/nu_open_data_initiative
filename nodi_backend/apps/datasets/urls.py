from .views import DataSetViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'api/datasets', DataSetViewSet, basename='dataset')
urlpatterns = router.urls