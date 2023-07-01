from django.contrib import admin
from django.http import HttpRequest

from .models import Player


class PlayersAdmin(admin.TabularInline):
    model = Player
    fields = ["username", "stack", "seat"]
    readonly_fields = ["username", "stack", "seat"]

    def get_readonly_fields(self, request: HttpRequest, obj=None):
        if obj:
            return self.readonly_fields
        else:
            return []
