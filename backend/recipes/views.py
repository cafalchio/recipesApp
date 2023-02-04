from rest_framework import generics
from .models import Recipe
from .serializers import RecipeSerializer

# REST API

class RecipeListAPIView(generics.ListAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    
recipe_list = RecipeListAPIView.as_view()

class RecipeDetailAPIView(generics.RetrieveAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    # lookup_field = 'id'
    
recipe_single = RecipeDetailAPIView.as_view()

class RecipeCreateAPIView(generics.CreateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

recipe_create = RecipeCreateAPIView.as_view()
    

class RecipeDeleteAPIView(generics.DestroyAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    # lookup_field = 'id'
    
recipe_delete = RecipeDeleteAPIView.as_view()


class RecipeUpdateAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    # lookup_field = 'id'
    def perform_update(self, serializer): # this is the method that is called when the update method is called
        isnstance = serializer.save()
        if not isnstance:
            isnstance.content = "No content"
    
recipe_update = RecipeUpdateAPIView.as_view()
