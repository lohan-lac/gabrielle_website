from .models import ThemeSettings

def theme_colors(request):
    theme = ThemeSettings.objects.first()
    return {'theme': theme}
