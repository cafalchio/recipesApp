from django.urls import path

from . import views

urlpatterns = [
    path('recipes/', views.recipe_list, name='list'), # all recipes
    path('recipes/<int:pk>', views.recipe_single, name='detail'), # single recipe
    path('recipes/create/', views.recipe_create, name='create'), # create recipe
    path('recipes/update/<int:pk>', views.recipe_update, name='update'), # delete recipe
    path('recipes/delete/<int:pk>', views.recipe_delete, name='delete'), # delete recipe
]
