from channels.db import database_sync_to_async
from channels.generic.websocket import AsyncJsonWebsocketConsumer

from .models import Game


class OnlineGamesConsumer(AsyncJsonWebsocketConsumer):
    async def connect(self) -> None:
        self.online_games_group = "online_games_group"
        try:
            await self.channel_layer.group_add(
                self.online_games_group, self.channel_name
            )
        except TypeError:
            print("Failed adding a game to the group")
        await self.get_online_games()
        await self.channel_layer.group_send(
            self.online_games_group,
            {
                "type": "websocket_online_games",
                "command": "onlineGames",
                "onlineGames": self.online_games,
            },
        )
        await self.accept()

    async def disconnect(self, code: int) -> None:
        try:
            await self.channel_layer.group_discard(
                self.online_games_group, self.channel_name
            )
        except TypeError:
            print("Failed disconnecting from online games group")
        await super().disconnect(code)

    async def websocket_online_games(self, event: dict) -> None:
        field_names = ["command", "onlineGames"]
        payload = {field: event[field] for field in field_names if field in event}
        await self.send_json(payload)

    async def websocket_game_added_or_deleted(self, event: dict) -> None:
        field_names = ["command", "hash"]
        payload = {field: event[field] for field in field_names if field in event}
        await self.send_json(payload)

    @database_sync_to_async
    def get_online_games(self) -> None:
        self.online_games = [{"hash": game.hash} for game in Game.objects.all()]
