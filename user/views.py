#from django.shortcuts import get_object_or_404
#from rest_framework.viewsets import ViewSet
#from rest_framework.response import Response
from rest_framework.mixins import ListModelMixin, UpdateModelMixin, RetrieveModelMixin
from rest_framework.viewsets import GenericViewSet
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from .serializers import UserModelSerializer
from .models import CustomUser


"""
class UserViewSet(ViewSet):
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]

    def list(self, request):
        users = CustomUser.objects.all()
        serializer = UserModelSerializer(users, many=True)
        return Response(serializer.data)
    
    def retrieve(self, request, pk=None):
        user = get_object_or_404(CustomUser, pk=pk)
        serializer = UserModelSerializer(user)
        return Response(serializer.data)
    
    def update(self, request, pk=None):
        queryset = CustomUser.objects.all()
        user = get_object_or_404(queryset, pk=pk)
        serializer = UserModelSerializer(user, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

"""

class UserCustomViewSet(ListModelMixin, RetrieveModelMixin, UpdateModelMixin, GenericViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = UserModelSerializer
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
