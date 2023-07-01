from rest_framework.generics import ListCreateAPIView
from rest_framework.serializers import ModelSerializer

from .models import Game
from .serializers import GameListSerializer, GameSerializer


class GameListCreateAPIView(ListCreateAPIView):
    queryset = Game.objects.order_by("-created_at")

    def get_serializer_class(self) -> ModelSerializer:
        if self.request.method == "POST":
            return GameSerializer
        return GameListSerializer
