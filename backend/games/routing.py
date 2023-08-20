from django.urls import path

from .consumers import OnlineGamesConsumer

websocket_urlpatterns = [
    path("ws/online-games/", OnlineGamesConsumer.as_asgi()),
]
