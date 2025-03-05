from django.contrib import admin
from django.urls import path ,include
from . import views

urlpatterns = [
    path("", views.index,name='index'),
    path("user-detail/",views.user_detail_routes.as_view(),name='userdetail'),
    path("user-detail/<int:id>",views.user_detail_routes.as_view(),name='userdetail')
]