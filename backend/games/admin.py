from django.contrib import admin
from django.http import HttpRequest

from players.admin import PlayersAdmin

from .models import Game


class GamesAdmin(admin.ModelAdmin):
    inlines = [PlayersAdmin]
    list_display = ["__str__", "seat_count", "hand_count", "game_state", "created_at"]
    readonly_fields = [
        "hash",
        "small_blind",
        "big_blind",
        "buy_in",
        "seat_count",
        "hand_count",
        "game_state",
        "created_at",
    ]

    def get_readonly_fields(self, request: HttpRequest, obj=None):
        if obj:
            return self.readonly_fields
        else:
            return ["hash", "hand_count", "game_state", "created_at"]


admin.site.register(Game, GamesAdmin)
