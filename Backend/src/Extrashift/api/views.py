# from rest_framework import viewsets
# class ExtrashiftViewSet(viewsets.ModelViewSet):
#     serializer_class = ExtrashiftSerializers
#     queryset = Extrashift.objects.all()

from rest_framework import permissions
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    UpdateAPIView,
    DestroyAPIView
)
from Extrashift.models import Extrashift
from .Serializers import ExtrashiftSerializers

# its for List API Object View


class ExtrashiftListView(ListAPIView):
    queryset = Extrashift.objects.all()
    serializer_class = ExtrashiftSerializers

# its for Detail of API Object View


class ExtrashiftDetailView(RetrieveAPIView):
    queryset = Extrashift.objects.all()
    serializer_class = ExtrashiftSerializers

# its for Create New Object View


class ExtrashiftCreateView(CreateAPIView):
    queryset = Extrashift.objects.all()
    serializer_class = ExtrashiftSerializers

# its for Updateing Object View After the object got some Change


class ExtrashiftUpdateView(UpdateAPIView):
    queryset = Extrashift.objects.all()
    serializer_class = ExtrashiftSerializers

# its for Deleting Object View


class ExtrashiftDeleteView(DestroyAPIView):
    queryset = Extrashift.objects.all()
    serializer_class = ExtrashiftSerializers
