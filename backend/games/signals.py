from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer
from django.db.models.signals import post_delete, post_save
from django.dispatch import receiver

from .models import Game

channel_layer = get_channel_layer()


@receiver(post_save, sender=Game)
def create_game_signal(sender, instance: Game, **kwargs) -> None:
    data = {
        "type": "websocket_game_added_or_deleted",
        "command": "gameCreated",
        "hash": instance.hash,
    }
    try:
        async_to_sync(channel_layer.group_send)("online_games_group", data)
    except TypeError:
        print("Failed sending create game signal")


@receiver(post_delete, sender=Game)
def delete_game_signal(sender, instance: Game, **kwargs) -> None:
    data = {
        "type": "websocket_game_added_or_deleted",
        "command": "gameDeleted",
        "hash": instance.hash,
    }
    try:
        async_to_sync(channel_layer.group_send)("online_games_group", data)
    except TypeError:
        print("Failed sending create game signal")
