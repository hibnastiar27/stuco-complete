# Generated by Django 5.0.6 on 2024-05-28 02:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('stuco_app', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userprofileinfo',
            name='portfolio_site',
        ),
        migrations.RemoveField(
            model_name='userprofileinfo',
            name='profile_pic',
        ),
    ]
