from django.urls import path
from .views import (
    home, 
    add_post, 
    login_view, 
    register_view,
    logout_view
)

urlpatterns = [
    path('add/', add_post, name='add_post'),
    path('', home, name='home'),
    path('login/', login_view, name='login'),
    path('register/', register_view, name='register'),
    path('logout/', logout_view, name='logout'),
]