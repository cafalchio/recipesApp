from django import urls
from .views import CustomUserCreate

app_name = 'users'

urlpatterns = [
    urls.path('register/', CustomUserCreate.as_view(), name='create_user'),
]
