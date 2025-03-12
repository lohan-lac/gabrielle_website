from django.db import models

class ContentItem(models.Model):
    titre = models.CharField(max_length=200, help_text="Titre du contenu")
    slug = models.SlugField(unique=True, help_text="Identifiant URL unique")
    mot_clé = models.TextField(blank=True, help_text="Description ou résumé sous forme de mots clés")
    contenu = models.TextField(blank=True, help_text="Contenu complet (texte, HTML, etc.)")
    
    visible_dans_le_portfolio = models.BooleanField(default=True, help_text="Afficher dans la page Portfolio")
    visible_dans_les_realisations = models.BooleanField(default=True, help_text="Afficher dans la page Réalisations")
    
    afficher_dans_homepage = models.BooleanField(default=False, help_text="Mettre en avant dans le carrousel de la page d'accueil")
    image_mise_en_avant = models.ForeignKey(
        'ContentImage',
        null=True, blank=True,
        on_delete=models.SET_NULL,
        related_name='featured_in',
        help_text="Image mise en avant (si différente de la première image)"
    )
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    ordre = models.PositiveIntegerField(default=0, help_text="Ordre d'affichage de l'image")
    
    class Meta:
        ordering = ['ordre']
    
    def __str__(self):
        return self.titre

class ContentImage(models.Model):
    contenu_lié = models.ForeignKey(
        ContentItem,
        on_delete=models.CASCADE,
        related_name='images',
        help_text="Contenu auquel cette image appartient"
    )
    image = models.ImageField(upload_to='content_images/', help_text="Fichier image")
    alt_text = models.CharField(max_length=200, blank=True, help_text="Texte alternatif pour l'accessibilité")
    ordre = models.PositiveIntegerField(default=0, help_text="Ordre d'affichage de l'image")
    
    class Meta:
        ordering = ['ordre']
    
    def __str__(self):
        return f"Image de {self.contenu_lié.titre}"

class Service(models.Model):
    nom = models.CharField(max_length=100, help_text="Nom du service")
    description = models.TextField(blank=True, help_text="Description du service")
    prix = models.DecimalField(max_digits=10, decimal_places=2, help_text="Tarif du service")
    
    def __str__(self):
        return self.nom
