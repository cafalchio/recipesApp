from django.db import models

# Create your models here.
class Comment(models.Model):
    username = models.CharField(max_length=200)
    comment = models.TextField()
    recipe = models.ForeignKey('recipes.Recipe', on_delete=models.CASCADE)
    stars = models.IntegerField()

    def __str__(self):
        return self.username