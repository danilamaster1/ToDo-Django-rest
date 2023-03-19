from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.validators import ASCIIUsernameValidator
from django.utils.translation import gettext_lazy as _


class CustomUser(AbstractUser):
    username_validator = ASCIIUsernameValidator()

    username = models.CharField(
        _("username"), 
        max_length=150, 
        unique=True, 
        help_text=_("Required. 150 characters or fewer. ASCII letters and digits only."),
        validators=[username_validator],
        error_messages={
            "unique": _("A user with that username already exists."),
        },
    )
    first_name = models.CharField(_("first name"), max_length=150)
    last_name = models.CharField(_("last name"), max_length=150)
    email = models.CharField(
        _("email address"), 
        max_length=256, 
        unique=True, 
        error_messages={
            "unique": _("A user with that email address already exists."),
        },
    )
