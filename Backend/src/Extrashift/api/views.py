from rest_framework.generics import ListAPIView, RetrieveAPIView
from Extrashift.models import Extrashift
from .Serializers import ExtrashiftSerializers


class ExtrashiftListView(ListAPIView):
    queryset = Extrashift.objects.all()
    serializer_class = ExtrashiftSerializers


class ExtrashiftDetailView(RetrieveAPIView):
    queryset = Extrashift.objects.all()
    serializer_class = ExtrashiftSerializers
