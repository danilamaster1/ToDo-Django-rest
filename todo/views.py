from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.renderers import JSONRenderer
from .serializers import ProjectModelSerializer, ToDoModelSerializer
from .models import Project, ToDo


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer


class ToDoModelViewSet(ModelViewSet):
    #renderer_classes = [JSONRenderer]
    queryset = ToDo.objects.all()
    serializer_class = ToDoModelSerializer
