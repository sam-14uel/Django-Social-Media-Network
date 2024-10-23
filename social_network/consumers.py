import json
from channels.generic.websocket import AsyncWebsocketConsumer
from django.core.files.base import ContentFile
import base64
from django.contrib.auth.models import User
from asgiref.sync import sync_to_async

#from social_network.other_models.media import ChatMedia
from social_network.other_models.rooms import ChatRoom, Chat, ChatMedia


class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.room_id = self.scope['url_route']['kwargs']['room_id']
        self.room_group_name = f'chat_{self.room_id}'
        self.user = self.scope["user"]

        # Join room group
        await self.channel_layer.group_add( # type: ignore
            self.room_group_name,
            self.channel_name
        )

        await self.accept()

    async def disconnect(self, close_code):
        # Leave room group
        await self.channel_layer.group_discard( # type: ignore
            self.room_group_name,
            self.channel_name
        )

    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json.get('message')
        attachment = text_data_json.get('attachment')
        username = text_data_json.get('username')
        first_name = text_data_json.get('first_name')
        last_name = text_data_json.get('last_name')
        time = text_data_json.get('time')
        room_id = self.room_id
        file_name = text_data_json.get('file_name')
        file_type = text_data_json.get('file_type')

        if attachment:
            format, file_str = attachment.split(';base64,')
            
            #ext = format.split('/')[-1]
            file_data = ContentFile(content=base64.b64decode(file_str), name=f'{file_name}')
            filetype = attachment.split(';')[0].split(':')[1]
            if filetype.startswith('image/'):
                chat = await self.save_msg_and_img(room_id, message, file_data, username)
            elif filetype.startswith('video/'):
                chat = await self.save_msg_and_vid(room_id, message, file_data, username)
            elif filetype.startswith('audio/'):
                chat = await self.save_msg_and_aud(room_id, message, file_data, username)
            elif filetype.startswith('application/'):
                chat = await self.save_msg_and_doc(room_id, message, file_data, username)
            
        else:
            chat = await self.save_msg(room_id, message, username)

        await self.channel_layer.group_send( # type: ignore
            self.room_group_name,
            {
                'type': 'chat_message',
                #'message': message,
                'message': chat.text,
                'attachment': attachment,
                'username': username,
                'first_name': first_name,
                'last_name': last_name,
                'time': time,
                'chat_id': chat.chat_id
            }
        )

    async def chat_message(self, event):
        message = event['message']
        attachment = event['attachment']
        username = event['username']
        first_name = event['first_name']
        last_name = event['last_name']
        time = event['time']
        chat_id = event['chat_id']

        await self.send(text_data=json.dumps({
            'message': message,
            'attachment': attachment,
            'username': username,
            'first_name': first_name,
            'last_name': last_name,
            'time': time,
            'chat_id': chat_id,
        }))

    @sync_to_async
    def save_msg_and_img(self, room_id, text, attatchment, sender_username):
        sender = User.objects.get(username=sender_username)
        chatroom = ChatRoom.objects.get(room_id=room_id)
        chat = Chat.objects.create(room=chatroom, text=text, media_is_img = True, sender=sender)
        chat_media = ChatMedia.objects.create(media=attatchment, chat_id=chat.chat_id, media_is_img = True)
        chat.media.add(chat_media)
        chat.save()
        return chat
    
    @sync_to_async
    def save_msg_and_vid(self, room_id, text, attatchment, sender_username):
        sender = User.objects.get(username=sender_username)
        chatroom = ChatRoom.objects.get(room_id=room_id)
        chat = Chat.objects.create(room=chatroom, text=text, media_is_vid = True, sender=sender)
        chat_media = ChatMedia.objects.create(media=attatchment, chat_id=chat.chat_id, media_is_vid = True)
        chat.media.add(chat_media)
        chat.save()
        return chat
    
    @sync_to_async
    def save_msg_and_aud(self, room_id, text, attatchment, sender_username):
        sender = User.objects.get(username=sender_username)
        chatroom = ChatRoom.objects.get(room_id=room_id)
        chat = Chat.objects.create(room=chatroom, text=text, media_is_aud = True, sender=sender)
        chat_media = ChatMedia.objects.create(media=attatchment, chat_id=chat.chat_id, media_is_aud = True)
        chat.media.add(chat_media)
        chat.save()
        return chat

    @sync_to_async
    def save_msg_and_doc(self, room_id, text, attatchment, sender_username):
        sender = User.objects.get(username=sender_username)
        chatroom = ChatRoom.objects.get(room_id=room_id)
        chat = Chat.objects.create(room=chatroom, text=text, media_is_doc = True, sender=sender)
        chat_media = ChatMedia.objects.create(media=attatchment, chat_id=chat.chat_id, media_is_doc = True)
        chat.media.add(chat_media)
        chat.save()
        return chat

    @sync_to_async
    def save_msg(self, room_id, text, sender_username):
        sender = User.objects.get(username=sender_username)
        chatroom = ChatRoom.objects.get(room_id=room_id)
        chat = Chat.objects.create(room=chatroom, text=text, sender=sender)
        return chat


#class ChatConsumer(AsyncWebsocketConsumer):
    #async def connect(self):
        #self.room_id = self.scope['url_route']['kwargs']['room_id']
        #self.roomGroupName = f'chat_{self.room_id}'
        #self.user = self.scope["user"]

        #await self.channel_layer.group_add(  #type: ignore
            #self.roomGroupName,
            #self.channel_name
        #)
        #await self.accept()

    #async def disconnect(self, close_code):
        #await self.channel_layer.group_discard(  #type: ignore
        #    self.roomGroupName,
        #    self.channel_layer
        #)#

    #async def receive(self, text_data):
        #text_data_json = json.loads(text_data)
        #message = text_data_json["message"]
        #username = text_data_json["username"]
        #time = text_data_json["time"]
        #await self.channel_layer.group_send(  #type: ignore
            #self.roomGroupName, {
                #"type": "sendMessage",
                #"message": message,
                #"username": username,
                #"time": time
            #})

    #async def sendMessage(self, event):
        #message = event["message"]
        #username = event["username"]
        #time = event["time"]
        #await self.send(text_data=json.dumps({"message": message, "username": username, "time": time}))#


    #async def save_msg_and_img(self, room_id, text, attatchment):
        #chatroom = ChatRoom.objects.get(room_id=room_id)
        #chat = Chat.objects.create(room=chatroom, text=text, media_is_img = True)
        #chat_media = ChatMedia.objects.create(media=attatchment, chat_id=chat.chat_id, media_is_img = True)
        #chat.media.add(chat_media)
        #chat.save()

    #async def save_msg_and_vid(self, room_id, text, attatchment):
        #chatroom = ChatRoom.objects.get(room_id=room_id)
        #chat = Chat.objects.create(room=chatroom, text=text, media_is_vid = True)
        #chat_media = ChatMedia.objects.create(media=attatchment, chat_id=chat.chat_id, media_is_vid = True)
        #chat.media.add(chat_media)
        #chat.save()

    #async def save_msg_and_aud(self, room_id, text, attatchment):
        #chatroom = ChatRoom.objects.get(room_id=room_id)
        #chat = Chat.objects.create(room=chatroom, text=text, media_is_aud = True)
        #chat_media = ChatMedia.objects.create(media=attatchment, chat_id=chat.chat_id, media_is_aud = True)
        #chat.media.add(chat_media)
        #chat.save()

    #async def save_msg_and_doc(self, room_id, text, attatchment):
        #chatroom = ChatRoom.objects.get(room_id=room_id)
        #chat = Chat.objects.create(room=chatroom, text=text, media_is_doc = True)
        #chat_media = ChatMedia.objects.create(media=attatchment, chat_id=chat.chat_id, media_is_doc = True)
        #chat.media.add(chat_media)
        #chat.save()

    #async def save_msg(self, room_id, text, attatchment):
        #chatroom = ChatRoom.objects.get(room_id=room_id)
        #chat = Chat.objects.create(room=chatroom, text=text#)##