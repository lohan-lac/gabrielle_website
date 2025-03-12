# Gabrielle - Site de Communication Design

## Description
**Gabrielle** est un site professionnel conçu pour présenter le travail d’une entreprise de communication design. À travers une vitrine interactive, le site met en avant un portfolio, des réalisations et les services proposés par l’entreprise.

Le projet a été développé avec Django (version 4.2) et déployé sur un VPS en utilisant Gunicorn et FastCGI.

## Fonctionnalités
- **Portfolio** : Mise en avant des projets via un carrousel d’images et des contenus dynamiques.
- **Réalisations** : Présentation des projets réalisés pour divers clients.
- **Services** : Détail des prestations proposées (nom, description, tarif).
- **Contact** : Page de contact avec les coordonnées et liens vers les réseaux sociaux.
- **Mentions Légales** : Informations légales obligatoires pour un site professionnel.

## Installation

### Prérequis
- Python 3.12
- Django 4.2
- Gunicorn (pour la production)
- Un serveur VPS configuré (Nginx ou Apache en front-end recommandé)

### Installation en environnement de développement
1. **Créer et activer l’environnement virtuel**  
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```
2. **Installer les dépendances**  
   ```bash
   pip install -r requirements.txt
   ```
3. **Effectuer les migrations de la base de données**  
   ```bash
   python manage.py migrate
   ```
4. **Créer un super-utilisateur** (pour accéder à l’admin Django)  
   ```bash
   python manage.py createsuperuser
   ```
5. **Lancer le serveur de développement**  
   ```bash
   python manage.py runserver
   ```

## Déploiement
Le projet est configuré pour être déployé sur un VPS avec Gunicorn et FastCGI. Vous devez mettre en place un serveur web (par exemple, Nginx ou Apache) pour rediriger le trafic vers Gunicorn.


## Structure du Projet
- **content/** : Application gérant les contenus du site (modèles, vues, etc.).
- **gabrielle/** : Paramètres du projet Django (fichiers `settings.py`, `urls.py`, `wsgi.py`, etc.).
- **theme/** : Gestion du thème et des paramètres visuels (modèle `ThemeSettings` et context processor associé).
- **templates/** : Fichiers HTML de base et spécifiques aux applications.
- **static/** : Ressources statiques (CSS, images, JavaScript).
- **media/** : Fichiers médias (images uploadées via le site).

## Configuration
La configuration principale se trouve dans `gabrielle/settings.py`.  
Les paramètres de thème sont gérés via le modèle `ThemeSettings` dans l’application **theme**, et sont injectés dans les templates via un context processor.

## Personnalisation du Thème
Vous pouvez modifier les couleurs et autres paramètres du thème en accédant à l’interface d’administration et en modifiant les entrées du modèle `ThemeSettings`. Ces paramètres sont ensuite utilisés dans les feuilles de style via des variables CSS.

## Licence
**Tous droits réservés.**  
Ce projet a été développé pour un usage professionnel et n’autorise aucune réutilisation, modification ou redistribution du code source sans autorisation explicite. Pour toute demande concernant l’utilisation du code, merci de contacter l’auteur.

## Contribution
Les contributions externes ne sont pas attendues pour ce projet professionnel. Pour toute suggestion ou collaboration, veuillez contacter directement l’équipe via l’adresse email indiquée sur la page de contact.

## Remarques
- **Déploiement** : Le site est déjà en production sur un VPS, et le script de déploiement utilise Gunicorn et FastCGI pour gérer le serveur Django.
- **Design** : Le site utilise des templates personnalisés et un système de gestion du thème pour offrir une interface visuelle dynamique et adaptable.
