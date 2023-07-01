from rest_framework import serializers

from .models import Player


class PlayerListSerializer(serializers.ModelSerializer):
    game = serializers.SerializerMethodField()

    class Meta:
        model = Player
        fields = ["username", "game", "stack", "seat"]

    def get_game(self, instance: Player) -> str | None:
        if instance.game:
            return instance.game.hash
        return None
