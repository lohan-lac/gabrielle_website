from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_view, name='home'),
    path('portfolio/', views.portfolio_view, name='portfolio'),
    path('portfolio/<slug:slug>/', views.portfolio_view, name='portfolio_detail'),
    path('realisations/', views.realisations_view, name='realisations'),
    path('realisations/<slug:slug>/', views.realisations_view, name='realisations_detail'),
    path('services/', views.services_view, name='services'),
    path('contact/', views.contact_view, name='contact'),
    path('mentions-legales/', views.mentions_legales_view, name='mentions_legales'),
]
