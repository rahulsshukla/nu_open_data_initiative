# Generated by Django 3.0.6 on 2020-09-29 18:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('datasets', '0010_auto_20200928_1956'),
    ]

    operations = [
        migrations.RenameField(
            model_name='dataset',
            old_name='downloads',
            new_name='popularity',
        ),
    ]