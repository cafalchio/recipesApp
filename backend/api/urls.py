from django.contrib import admin
from django.urls import include, path
from recipes import views as recipes_views
from comments import views as comments_views
from users import views as user_views
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/recipes/', recipes_views.recipe_list, name='recipe_list'),
    path('api/recipes/<int:pk>', recipes_views.recipe_detail, name='recipe_detail'),
    path('api/comments/',  comments_views.comment_list, name='comment_list'),
    path('api/comments/<int:pk>', comments_views.comment_detail, name='comment_detail'),
    path('api/register/', user_views.CustomUserCreate.as_view(), name='create_user'),
    path('api/user/',  user_views.current_user, name='current_user'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]

urlpatterns = format_suffix_patterns(urlpatterns)