# Generated by Django 4.1.6 on 2023-02-04 18:15

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Recipe',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('cooking_time', models.CharField(max_length=50)),
                ('servings', models.CharField(max_length=50)),
                ('ingredients', models.TextField()),
                ('preparing', models.TextField()),
                ('main_picture', models.CharField(max_length=255)),
                ('publication_date', models.DateTimeField(verbose_name='date published')),
                ('public', models.BooleanField(default=True)),
            ],
        ),
    ]
