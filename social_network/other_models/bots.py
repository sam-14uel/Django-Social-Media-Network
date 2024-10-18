from django.db import models

import shortuuid

# Create your models here.

class Bot(models.Model):
    name = models.CharField(max_length=100)
    username = models.CharField(max_length=100, unique=True)
    welcome_text_msg = models.TextField()
    from.media import BotWelcomeMediaMsg
    welcome_file_msg = models.ManyToManyField(BotWelcomeMediaMsg, blank=True)
    bot_id = models.CharField(max_length=128, unique=True, default=shortuuid.uuid)
    welcome_with_media = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)



from django.contrib import admin
class BotAdmin(admin.ModelAdmin):
    list_display = ['name', 'username', 'bot_id', 'welcome_with_media']
