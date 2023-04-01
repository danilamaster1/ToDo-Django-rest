from django.contrib import admin
from user import models as user_models

@admin.register(user_models.CustomUser)
class UserAdmin(admin.ModelAdmin):
    list_display = ['username', 'first_name', 'last_name']
    list_per_page = 10
    search_fields = ['username']
