from django_filters import rest_framework as filters
from .models import Project, ToDo


class ProjectFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr='contains')

    class Meta:
        model = Project
        fields = ['name']


class ToDoFilter(filters.FilterSet):
    text = filters.CharFilter()
    created = filters.DateFromToRangeFilter()
    
    class Meta:
        model = ToDo
        fields = ['id', 'text', 'created']
