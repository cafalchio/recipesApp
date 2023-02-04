from django.db import models

# Create your models here.
class Recipe(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    cooking_time = models.CharField(max_length=50)
    servings = models.CharField(max_length=50)
    ingredients = models.TextField()
    preparing = models.TextField()
    main_picture = models.CharField(max_length=255)
    publication_date = models.DateTimeField('date published')
    public = models.BooleanField(default=True)

    def __str__(self):
        return self.title