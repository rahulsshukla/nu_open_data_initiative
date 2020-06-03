# Generated by Django 3.0.6 on 2020-05-31 22:39

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('datasets', '0003_auto_20200531_2139'),
    ]

    operations = [
        migrations.AddField(
            model_name='dataset',
            name='approved_at',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]