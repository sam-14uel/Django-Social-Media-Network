from django.shortcuts import render, get_object_or_404, redirect 
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.http import Http404, JsonResponse
from social_network.other_models.media import ChatMedia
from social_network.other_models.rooms import ChatRoom, Chat
from django.contrib.auth.models import User

@login_required
def chat_view(request, room_id):
    chat_group = get_object_or_404(ChatRoom, room_id=room_id)
    chat_messages = Chat.objects.filter(room=chat_group)
    
    other_user = chat_group.members.exclude(username=request.user.username)
    if chat_group.is_private:
        if request.user not in chat_group.members.all():
            return redirect('chats')
        else:
            context = {
                'chat_messages' : chat_messages,
                'other_user' : other_user,
                'chat_group' : chat_group,
            }
            return render(request, 'chats/private_chats.html', context)
            
    elif chat_group.is_private == False:
        if request.user not in chat_group.members.all():
            return redirect('join-group-request', chat_group.room_id)
        elif request.user in chat_group.members.all():
            context = {
                'chat_messages' : chat_messages,
                'other_user' : other_user,
                'chat_group' : chat_group,
            }
            return render(request, 'chats/group_chats.html', context)
    
    
    
    context = {
        'chat_messages' : chat_messages,
        'other_user' : other_user,
        'chat_group' : chat_group
    }
    
    return render(request, 'a_rtchat/chat.html', context)

@login_required
def get_or_create_chatroom(request, username):
    if request.user.username == username:
        return redirect('home')
    
    other_user = User.objects.get(username = username)
    my_chatrooms = request.user.chat_groups.filter(is_private=True)
    
    
    if my_chatrooms.exists():
        for chatroom in my_chatrooms:
            if other_user in chatroom.members.all():
                chatroom = chatroom
                break
            else:
                chatroom = ChatRoom.objects.create(admin=request.user, is_private = True)
                chatroom.members.add(other_user, request.user)
    else:
        chatroom = ChatRoom.objects.create(admin=request.user, is_private = True)
        chatroom.members.add(other_user, request.user)
        
    return redirect('chatroom', chatroom.room_id)


@login_required
def create_groupchat(request):
    
    if request.method == 'POST':
        group_name = request.POST['group_name']
        new_group_chat = ChatRoom.objects.create(admin=request.user, group_name=group_name)
        new_group_chat.members.add(request.user)
        new_group_chat.save()
        return redirect('chatroom', new_group_chat.room_id)
    return render(request, 'a_rtchat/create_groupchat.html')


@login_required
def chatroom_edit_view(request, room_id):
    chat_group = get_object_or_404(ChatRoom, room_id=room_id)
    if request.user != chat_group.admin:
        raise Http404()
    
    if request.method == 'POST':
        new_group_name = request.POST['group_name']
        group_chat = ChatRoom.objects.update(room_id=room_id, group_name=new_group_name)
        remove_members = request.POST.getlist('remove_members')
        for member_id in remove_members:
            member = User.objects.get(id=member_id)
            chat_group.members.remove(member)  
            
        return redirect('chatroom', chat_group.room_id)
    
    context = {
        'chat_group' : chat_group
    }   
    return render(request, 'a_rtchat/chatroom_edit.html', context) 


@login_required
def chatroom_delete_view(request, room_id):
    chat_group = get_object_or_404(ChatRoom, room_id=room_id)
    if request.user != chat_group.admin:
        raise Http404()
    
    if request.method == "POST":
        chat_group.delete()
        messages.success(request, 'Chatroom deleted')
        return redirect('home')
    
    return render(request, 'a_rtchat/chatroom_delete.html', {'chat_group':chat_group})


#@login_required
def chatroom_leave_view(request, room_id):
    chat_group = get_object_or_404(ChatRoom, room_id=room_id)
    if request.user not in chat_group.members.all():
        raise Http404()
    
    if request.method == "POST":
        chat_group.members.remove(request.user)
        messages.success(request, 'You left the Chat')
        return redirect('home')


def my_chatrooms(request):
    return render(request, 'chats/chats.html')

def delete_chat(request, chat_id):
    chat = Chat.objects.get(chat_id=chat_id)
    chat_medias = ChatMedia.objects.filter(chat_id=chat.chat_id)
    if request.user == chat.sender:
        chat.delete()
        if chat_medias:
            chat_medias.delete()
            return JsonResponse({
                'message': f'successfully deleted chat {chat.chat_id} with {chat_medias.count()} media files',
                'status': 'successfull',
            }, safe=True)
        return JsonResponse({
            'message': f'successfully deleted chat {chat.chat_id}',
            'status': 'successfull',
        }, safe=True)
    elif request.user != chat.sender:
        return JsonResponse({
            'message': f'cannot delete chat {chat.chat_id}',
            'status': 'permission_denied',
        }, safe=True)
    else:
        return JsonResponse({
            'message': f'error occured while deleting chat {chat.chat_id}',
            'status': 'no_action',
        }, safe=True)