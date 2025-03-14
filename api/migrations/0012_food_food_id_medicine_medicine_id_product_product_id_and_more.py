# Generated by Django 5.1.3 on 2025-03-04 09:00

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0011_medicine_price_product_price"),
    ]

    operations = [
        migrations.AddField(
            model_name="food",
            name="food_id",
            field=models.IntegerField(default=None, null=True),
        ),
        migrations.AddField(
            model_name="medicine",
            name="medicine_id",
            field=models.IntegerField(default=None, null=True),
        ),
        migrations.AddField(
            model_name="product",
            name="product_id",
            field=models.IntegerField(default=None, null=True),
        ),
        migrations.CreateModel(
            name="Ratings",
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
                ("message", models.TextField()),
                (
                    "star",
                    models.CharField(
                        choices=[
                            ("1", "1"),
                            ("2", "2"),
                            ("3", "3"),
                            ("4", "4"),
                            ("5", "5"),
                        ],
                        max_length=50,
                    ),
                ),
                (
                    "user_name",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="api.userdetail"
                    ),
                ),
            ],
        ),
    ]
