from django.urls import path

from .views import PlayerListAPIView

urlpatterns = [
    path("", PlayerListAPIView.as_view(), name="players_api"),
]
