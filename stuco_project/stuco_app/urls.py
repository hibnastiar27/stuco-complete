from django.urls import path, include
from . import views

app_name = "stuco_app"

urlpatterns = [
  path('kelas/', views.kelas, name='kelas'),
  path('kelas/detail/', views.kelas_detail, name='kelas_detail'),
  path('roadmap/', views.roadmap, name='roadmap'),
  path('roadmap/detail/', views.roadmap_detail, name='roadmap_detail'),
  path('mentoring/', views.mentoring, name='mentoring'),
  path('mentoring/detail/', views.mentoring_detail, name='mentoring_detail'),
  
  
  path('register/', views.register, name='register'),
  path('login_user/', views.login_user, name='login_user'),
]