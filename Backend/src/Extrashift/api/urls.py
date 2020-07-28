from django.urls import path, include
from .views import ExtrashiftListView, ExtrashiftDetailView


urlpatterns = [
    path('', ExtrashiftListView.as_view()),
    path('<pk>', ExtrashiftDetailView.as_view()),
]
