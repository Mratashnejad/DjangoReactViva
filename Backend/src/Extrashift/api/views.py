from Extrashift.models import Extrashift
from .Serializers import ExtrashiftSerializers

from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView
)

#its for List API Object View
class ExtrashiftListView(ListAPIView):
    queryset = Extrashift.objects.all()
    serializer_class = ExtrashiftSerializers

#its for Detail of API Object View
class ExtrashiftDetailView(RetrieveAPIView):
    queryset = Extrashift.objects.all()
    serializer_class = ExtrashiftSerializers

#its for Create New Object View
class ExtrashiftCreateView(CreateAPIView):
    queryset = Extrashift.objects.all()
    serializer_class = ExtrashiftSerializers
