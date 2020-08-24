from Extrashift.api.views import ExtrashiftViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', ExtrashiftViewSet, basename='Extrashift')
urlpatterns = router.urls


# ------------------this is Old and To Many Code ---------------------

from django.urls import path
# from .views import (
#     ExtrashiftListView,
#     ExtrashiftCreateView,
#     ExtrashiftDetailView,
#     ExtrashiftUpdateView,
#     ExtrashiftDeleteView
# )


# urlpatterns = [
#     path('', ExtrashiftListView.as_view()),
#     path('create/', ExtrashiftCreateView.as_view()),
#     path('<pk>', ExtrashiftDetailView.as_view()),
#     path('<pk>/update/', ExtrashiftUpdateView.as_view()),
#     path('<pk>/delete/', ExtrashiftDeleteView.as_view()),
# ]
