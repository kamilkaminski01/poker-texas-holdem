from typing import List

from django.contrib.auth.models import AbstractUser, BaseUserManager


class UserManager(BaseUserManager):
    use_in_migrations = True

    def create_user(self, username: str, password: str, **extra_fields) -> "User":
        if not username:
            raise ValueError("User must have a username")
        user = self.model(username=username, **extra_fields)
        user.set_password(password)  # type: ignore
        user.save()
        return user  # type: ignore

    def create_superuser(self, username: str, password: str, **extra_fields) -> "User":
        if not password:
            raise TypeError("Superusers must have a password")
        user = self.create_user(username, password, **extra_fields)
        user.is_staff = True
        user.is_superuser = True
        user.save()
        return user


class User(AbstractUser):
    first_name = None  # type: ignore
    last_name = None  # type: ignore
    email = None  # type: ignore

    REQUIRED_FIELDS: List[str] = []

    objects = UserManager()  # type: ignore
