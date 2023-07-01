from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from shortuuid.django_fields import ShortUUIDField


class Game(models.Model):
    hash = ShortUUIDField(
        length=8,
        unique=True,
    )
    small_blind = models.DecimalField(
        default=1,
        max_digits=7,
        decimal_places=2,
        validators=[MinValueValidator(0.01)],
    )
    big_blind = models.DecimalField(
        default=2,
        max_digits=7,
        decimal_places=2,
        validators=[MinValueValidator(0.02)],
    )
    buy_in = models.PositiveIntegerField(
        default=0,
        validators=[MaxValueValidator(1000)],
    )
    hand_count = models.PositiveIntegerField(default=0)
    seat_count = models.PositiveIntegerField(default=0)
    game_state = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.hash
