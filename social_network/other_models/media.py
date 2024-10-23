from django.db import models
import shortuuid
#from social_network.other_models.bots import Bot

class BotWelcomeMediaMsg(models.Model):
    picture = models.FileField(upload_to='media/bots_welcome_media', null=True)
    bot_id = models.CharField(max_length=128)
    created = models.DateTimeField(auto_now_add=True)

    media_id = models.CharField(max_length=128, unique=True, default=shortuuid.uuid, null=True)


#from social_network.other_models.contents import Post

#class PostMedia(models.Model):
    #picture = models.ImageField(upload_to='media/posts', verbose_name="Picture", null=True)
    #post_id = models.CharField(max_length=128)
    #created = models.DateTimeField(auto_now_add=True)

    #media_id = models.CharField(max_length=128, unique=True, default=shortuuid.uuid, null=True)

    #def __str__(self):
        #return f"{self.post_id} + {self.created}"


#from social_network.other_models.rooms import Chat


#class ChatMedia(models.Model):
    #media = models.FileField(upload_to='media/chatroom_msg_media', null=True) 

    #media_is_img = models.BooleanField(default=False)
    #media_is_vid = models.BooleanField(default=False)
    #media_is_aud = models.BooleanField(default=False)
    #media_is_doc = models.BooleanField(default=False)

    #chat_id = models.CharField(max_length=128)

    #media_id = models.CharField(max_length=128, unique=True, default=shortuuid.uuid, null=True)
    
    #created = models.DateTimeField(auto_now_add=True)


#class CommentMedia(models.Model):
    #media = models.FileField(upload_to='media/comments', null=True)

    #media_is_img = models.BooleanField(default=False)
    #media_is_vid = models.BooleanField(default=False)
    #media_is_aud = models.BooleanField(default=False)
    #media_is_doc = models.BooleanField(default=False)

    #post_id = models.CharField(max_length=128, blank=True, null=True)
    #short_id = models.CharField(max_length=128, blank=True, null=True)
    #video_id = models.CharField(max_length=128, blank=True, null=True)

    #media_id = models.CharField(max_length=128, unique=True, default=shortuuid.uuid, null=True)

    #created = models.DateTimeField(auto_now_add=True)


from django.contrib import admin
class PostMediaAdmin(admin.ModelAdmin):
    list_display = ['picture', 'post_id', 'created']

class ChatMediaAdmin(admin.ModelAdmin):
    list_display = ['media', 'chat_id', 'created', 'media_is_img', 'media_is_aud', 'media_is_vid', 'media_is_doc']