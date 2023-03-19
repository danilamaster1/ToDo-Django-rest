from rest_framework.viewsets import ModelViewSet
from .serializers import UserModelSerializer
from .models import CustomUser


class UserModelViewSet(ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = UserModelSerializer
