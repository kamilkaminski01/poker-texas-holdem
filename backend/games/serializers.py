from rest_framework import serializers

from .models import Game


class FormattedDateTimeField(serializers.DateTimeField):
    def to_representation(self, value):
        formatted_datetime = value.strftime("%d/%m/%y %H:%M")
        return formatted_datetime


class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = [
            "small_blind",
            "big_blind",
            "buy_in",
            "seat_count",
        ]


class GameListSerializer(serializers.ModelSerializer):
    created_at = FormattedDateTimeField()

    class Meta:
        model = Game
        fields = [
            "hash",
            "small_blind",
            "big_blind",
            "buy_in",
            "hand_count",
            "seat_count",
            "game_state",
            "created_at",
        ]
