# Generated by Django 5.1.6 on 2025-02-28 17:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('content', '0002_delete_contact_alter_contentimage_options_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='contentitem',
            options={'ordering': ['ordre']},
        ),
        migrations.AddField(
            model_name='contentitem',
            name='ordre',
            field=models.PositiveIntegerField(default=0, help_text="Ordre d'affichage de l'image"),
        ),
    ]
