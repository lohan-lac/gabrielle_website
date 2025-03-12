from django.db import models

class ThemeSettings(models.Model):
    background_color = models.CharField(
        max_length=7,
        default='#FFFFFF',
        help_text="Couleur de fond (ex: #FFFFFF)"
    )
    content_color = models.CharField(
        max_length=7,
        default='#F0F0F0',
        help_text="Couleur du contenu (ex: #F0F0F0)"
    )
    accent_color = models.CharField(
        max_length=7,
        default='#007BFF',
        help_text="Couleur d'accord (ex: #007BFF)"
    )
    contrast_color = models.CharField(
        max_length=7,
        default='#000000',
        help_text="Couleur de contraste (ex: #000000)"
    )
    
    class Meta:
        verbose_name = "Paramètre du thème"
        verbose_name_plural = "Paramètres du thème"
    
    def __str__(self):
        return "Paramètres du thème"
