from django.db import models
from user.models import CustomUser


class Project(models.Model):
    name = models.CharField(max_length=64, unique=True)
    repo_url = models.URLField()
    users = models.ManyToManyField(CustomUser)

    def __str__(self):
        return self.name


class ToDo(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    text = models.TextField()
    created = models.DateTimeField(auto_now_add=True, editable=False)
    updated = models.DateTimeField(auto_now=True, editable=False)
    user = models.ForeignKey(CustomUser, null=True, on_delete=models.SET_NULL)
    is_active = models.BooleanField(default=True)
    is_deleted = models.BooleanField(default=False)
