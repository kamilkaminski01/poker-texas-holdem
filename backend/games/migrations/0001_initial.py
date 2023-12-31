# Generated by Django 4.2.2 on 2023-07-01 07:19

import django.core.validators
import shortuuid.django_fields
from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Game",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "hash",
                    shortuuid.django_fields.ShortUUIDField(
                        alphabet=None, length=8, max_length=8, prefix="", unique=True
                    ),
                ),
                (
                    "small_blind",
                    models.DecimalField(
                        decimal_places=2,
                        default=1,
                        max_digits=7,
                        validators=[django.core.validators.MinValueValidator(0.01)],
                    ),
                ),
                (
                    "big_blind",
                    models.DecimalField(
                        decimal_places=2,
                        default=2,
                        max_digits=7,
                        validators=[django.core.validators.MinValueValidator(0.02)],
                    ),
                ),
                (
                    "buy_in",
                    models.PositiveIntegerField(
                        default=0,
                        validators=[django.core.validators.MaxValueValidator(1000)],
                    ),
                ),
                ("hand_count", models.PositiveIntegerField(default=0)),
                ("seat_count", models.PositiveIntegerField(default=0)),
                ("game_state", models.BooleanField(default=False)),
                ("created_at", models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
