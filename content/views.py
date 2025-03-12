from django.shortcuts import render
from .models import ContentItem, Service

def home_view(request):
    featured_content = ContentItem.objects.filter(afficher_dans_homepage=True)
    return render(request, 'content/home.html', {
        'featured_content': featured_content,
    })

def portfolio_view(request):
    portfolio_items = ContentItem.objects.filter(visible_dans_le_portfolio=True)
    return render(request, 'content/portfolio.html', {
        'portfolio_items': portfolio_items,
    })

def realisations_view(request):
    realisations_items = ContentItem.objects.filter(visible_dans_les_realisations=True)
    return render(request, 'content/realisations.html', {
        'realisations_items': realisations_items,
    })

def services_view(request):
    services_list = Service.objects.all()
    return render(request, 'content/services.html', {
        'services_list': services_list,
    })

def contact_view(request):
    return render(request, 'content/contact.html')

def mentions_legales_view(request):
    return render(request, 'content/mentions_legales.html')
