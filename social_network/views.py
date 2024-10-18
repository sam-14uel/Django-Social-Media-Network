from django.shortcuts import render, redirect
from django.http import JsonResponse

from social_network.other_models.accounts import Profile
from social_network.other_models.rooms import ChatRoom


# Create your views here.

def home(request):
    return redirect('for-you-posts')


def user_search(request):
    query = request.GET.get('query')
    users = Profile.objects.filter(user__username__icontains=query)
    data = []
    for user in users:
        data.append({
            'profile_id': user.profile_id,
            'first_name': user.user.first_name,
            'last_name': user.user.last_name,
            'username': user.user.username,
            'profile_picture': user.profile_picture.url,
            'verified': user.verified,
        })
    if not data:
        return JsonResponse({'message': f'No results found for "@{query}"'}, safe=False)
    return JsonResponse(data, safe=False)

def search_mychatroom(request):
    query = request.GET.get('query')
    my_chatrooms = request.user.chat_groups.filter(is_private=True)

    data = []
    
    for my_chatroom in my_chatrooms:
        chatroom = ChatRoom.objects.get(room_id=my_chatroom.room_id)
        other_members = chatroom.members.exclude(username__icontains=query, username=request.user.username)
        for member in other_members:
            data.append({
                'room_id': my_chatroom.room_id,
                'username': member.username,
                'first_name': member.first_name,
                'last_name': member.last_name,
                'profile_picture': member.profile.profile_picture.url,
            })
    if not data:
        return JsonResponse({'message': f'No chats yet'}, safe=False)
    return JsonResponse(data, safe=False)


from django.utils import timezone

#def get_time_based_recommendations(user, num_recommendations=5):
    #current_hour = timezone.now().hour
    #if 6 <= current_hour < 12:
        # Morning recommendations (e.g., motivational posts)
        #posts = Post.objects.filter(category='morning_motivation').order_by('-created_at')[:num_recommendations]
    #elif 12 <= current_hour < 18:
        # Afternoon recommendations (e.g., productivity tips)
        #posts = Post.objects.filter(category='productivity').order_by('-created_at')[:num_recommendations]
    #else:
        # Evening recommendations (e.g., relaxation or entertainment)
        #posts = Post.objects.filter(category='relaxation').order_by('-created_at')[:num_recommendations]
    #return posts

from social_network.other_models.contents import Post
from social_network.other_models.accounts import Follow

def get_social_recommendations(user, num_recommendations=5):
    # Get the users the current user is following
    following_users = Follow.objects.filter(follower=user).values_list('following', flat=True)
    
    # Query posts made by the users that the current user is following
    recommended_posts = Post.objects.filter(poster__in=following_users).order_by('-created')[:num_recommendations]
    
    return recommended_posts


#def get_demographic_recommendations(user, num_recommendations=5):
    #user_profile = Profile.objects.get(user=user)
    #if user_profile.age <= 25:
        #posts = Post.objects.filter(category='youth_content').order_by('-created')[:num_recommendations]
    #else:
        #posts = Post.objects.filter(category='general_content').order_by('-created')[:num_recommendations]
    #return posts


#from datetime import datetime, timedelta

#def get_trending_posts(num_recommendations=5):
    # Order posts by number of likes or comments in the past 24 hours
    #trending_posts = Post.objects.filter(
        #created__gte=datetime.now()-timedelta(days=1)).annotate(
            #total_likes=Count('liked_post'),
            #total_comments=Count('comments')).order_by(
                #'-total_likes',
                #'-total_comments')[:num_recommendations]
    #return trending_posts

