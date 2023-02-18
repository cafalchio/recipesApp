from django.contrib import admin
from django.urls import path, include
from recipes import views as recipes_views
from comments import views as comments_views
from rest_framework.urlpatterns import format_suffix_patterns
# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
#     TokenRefreshView,
# )

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/recipes', recipes_views.recipe_list),
    path('api/recipes/<int:pk>', recipes_views.recipe_detail),
    path('api/comments',  comments_views.comment_list),
    path('api/comments/<int:pk>', comments_views.comment_detail)
    # # path('api/', include('comments.urls')),
    # # path('api/', include('users.urls')),
    # path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]

urlpatterns = format_suffix_patterns(urlpatterns)