from django.urls import path
from .views import add_post
from .views import home

urlpatterns = [
    path('add/', add_post, name='add_post'),
    path('', home, name='home'),
]