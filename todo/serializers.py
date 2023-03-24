from rest_framework.serializers import ModelSerializer, StringRelatedField
from .models import Project, ToDo


class ProjectModelSerializer(ModelSerializer):
    #users = StringRelatedField(many=True)

    class Meta:
        model = Project
        fields = '__all__'


class ToDoModelSerializer(ModelSerializer):
    #project = ProjectModelSerializer()
    
    class Meta:
        model = ToDo
        fields = '__all__'
