from rest_framework.generics import ListAPIView

from .models import Player
from .serializers import PlayerListSerializer


class PlayerListAPIView(ListAPIView):
    queryset = Player.objects.all()
    serializer_class = PlayerListSerializer
