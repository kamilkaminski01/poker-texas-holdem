from django.core.validators import MinValueValidator
from django.db import models

from games.models import Game
from users.models import User


class Player(User):
    game = models.ForeignKey(
        Game, on_delete=models.CASCADE, null=True, related_name="players"
    )
    stack = models.DecimalField(
        default=0, max_digits=7, decimal_places=2, validators=[MinValueValidator(0)]
    )
    seat = models.PositiveIntegerField(null=True, blank=True)

    def __str__(self):
        return self.username

    class Meta:
        verbose_name = "Player"
        verbose_name_plural = "Players"
