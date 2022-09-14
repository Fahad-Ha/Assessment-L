from django.urls import path
from base.views import program_views as views

urlpatterns = [

    path('', views.getPrograms, name="programs"),
    path('<str:pk>/', views.getProgram, name="program"),

]