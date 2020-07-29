from rest_framework import serializers
from Extrashift.models import Extrashift


class ExtrashiftSerializers(serializers.ModelSerializer):
    class Meta:
        model = Extrashift
        fields = ('id', 'title', 'slug', 'datetime', 'manager',
                  'quantity', 'gender', 'Lable', 'language')
