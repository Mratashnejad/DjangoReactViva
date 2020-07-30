from django.urls import path, include
from .views import (
    ExtrashiftListView,
    ExtrashiftDetailView,
    ExtrashiftCreateView,
    ExtrashiftUpdateView
)


urlpatterns = [
    path('', ExtrashiftListView.as_view()),
    path('create/', ExtrashiftCreateView.as_view()),
    path('<pk>', ExtrashiftDetailView.as_view()),
    path('<pk>/update/', ExtrashiftUpdateView.as_view()),
]
