from django.urls import path

from .views import GameListCreateAPIView

urlpatterns = [
    path("", GameListCreateAPIView.as_view(), name="game_api"),
]
