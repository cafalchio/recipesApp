from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.
class Comment(models.Model):
    comment = models.TextField()
    stars = models.SmallIntegerField(validators=[MinValueValidator(0),MaxValueValidator(5)])
    user = models.ForeignKey('users.User', on_delete=models.CASCADE)
    recipe = models.ForeignKey('recipes.Recipe', on_delete=models.CASCADE)

    def __str__(self):
        return self.comment