from django.shortcuts import render, get_object_or_404
from rest_framework.viewsets import ModelViewSet
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.pagination import LimitOffsetPagination
from .serializers import ProjectModelSerializer, ToDoModelSerializer
from .models import Project, ToDo
from .filters import ProjectFilter, ToDoFilter


#class ProjectLimitOffsetPagination(LimitOffsetPagination):
#    default_limit = 10


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
#    pagination_class = ProjectLimitOffsetPagination
    filterset_class = ProjectFilter


#class ToDoLimitOffsetPagination(LimitOffsetPagination):
#    default_limit = 20


class ToDoModelViewSet(ModelViewSet):
    #renderer_classes = [JSONRenderer]
    queryset = ToDo.objects.all()
    serializer_class = ToDoModelSerializer
    #pagination_class = ToDoLimitOffsetPagination
    filterset_class = ToDoFilter

    def destroy(self, request, pk=None):
        queryset = ToDo.objects.all()
        todo = get_object_or_404(queryset, pk=pk)
        todo.is_deleted = True
        todo.is_active = False
        serializer = ToDoModelSerializer(todo, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
