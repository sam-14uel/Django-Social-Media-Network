from django.db import models
import shortuuid
from django.contrib.auth.models import User

# Create your models here.

class ChatRoom(models.Model):
    room_id = models.CharField(max_length=128, unique=True, default=shortuuid.uuid)
    admin = models.ForeignKey(User, on_delete=models.CASCADE)
    members = models.ManyToManyField(User, blank=True, related_name='chat_groups')

    group_name = models.CharField(max_length=128, blank=True, null=True)
    group_description = models.TextField(blank=True)
    group_picture = models.ImageField(default='media/default_group_pic.png', null=True, blank=True)
    is_private = models.BooleanField(default=False)
    private_group = models.BooleanField(default=False)

    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        if self.is_private:
            members = self.members.exclude(username = self.admin.username)
            for member in members:
                return f"{self.admin.username} started a private conversation with {member.username}"
        elif self.is_private == False:
            return f"{self.group_name} Group was created by {self.admin.username}"
        else:
            return f"private group = {self.is_private}  with id = {self.room_id} created by {self.admin.username}"
        return f"private group = {self.is_private}  with id = {self.room_id} created by {self.admin.username}"

class Chat(models.Model):
    chat_id = models.CharField(max_length=128, unique=True, default=shortuuid.uuid)
    sender = models.ForeignKey(User, on_delete=models.CASCADE)
    room = models.ForeignKey(ChatRoom, on_delete=models.CASCADE, related_name='chat_messages')
    text = models.TextField(null=True)
    #from social_network.other_models.rooms import ChatMedia
    media = models.ManyToManyField('ChatMedia', blank=True)

    media_is_img = models.BooleanField(default=False)
    media_is_vid = models.BooleanField(default=False)
    media_is_aud = models.BooleanField(default=False)
    media_is_doc = models.BooleanField(default=False)

    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        if self.room.is_private:
            receivers = self.room.members.exclude(username = self.sender.username)
            for receiver in receivers:
                return f"from {self.sender.username} to {receiver.username}"
        elif self.room.is_private == False:
            return f"from {self.sender.username} to {self.room.group_name} Group created by {self.room.admin.username}"
        else:
            return f"from {self.sender.username} to {self.room.room_id}"
        return f"from {self.sender.username} to {self.room.room_id}"
    

class ChatMedia(models.Model):
    media = models.FileField(upload_to='media/chatroom_msg_media', null=True) 

    media_is_img = models.BooleanField(default=False)
    media_is_vid = models.BooleanField(default=False)
    media_is_aud = models.BooleanField(default=False)
    media_is_doc = models.BooleanField(default=False)

    chat_id = models.ForeignKey(Chat, on_delete=models.CASCADE, related_name='chat_media')

    media_id = models.CharField(max_length=128, unique=True, default=shortuuid.uuid, null=True)
    
    created = models.DateTimeField(auto_now_add=True)


from django.contrib import admin
class ChatRoomAdmin(admin.ModelAdmin):
    list_display = ['admin', 'room_id', 'group_name', 'is_private']

class ChatAdmin(admin.ModelAdmin):
    list_display = ['sender', 'room','chat_id', 'media_is_vid', 'media_is_aud', 'media_is_img', 'media_is_doc']

