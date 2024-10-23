from django.urls import path
from. import views
from.other_views import account, message, auth, engagements, for_you, contents

urlpatterns = [
    path('', views.home, name='home'),
#---# chats -------------------------------------------------------------------------------------------------
    path('chats/c/<room_id>/', message.chat_view, name='chatroom'),                             #|
    path('chats/u/@<username>', message.get_or_create_chatroom, name='chat-user'),              #|                           #|
    path('chats/', message.my_chatrooms, name='chats'),                                         #|
    path('chats/r/<room_id>/edit', message.chatroom_edit_view, name='edit-chatroom'),           #|
    path('chats/c/<room_id>/leave', message.chatroom_leave_view, name='leave-chatroom'), # type: ignore    #|
    path('chats/r/<room_id>/delete', message.chatroom_delete_view, name='delete-chatroom'),     #|
    path('chats/r/<room_id>/', message.chatroom_delete_view, name='request-join-room'),         #|
    path('chat/<chat_id>/delete', message.delete_chat, name='delete-chat'),         #|
    path('chats/r/create_group_chat', message.create_groupchat, name='create-groupchat'),         #| # type: ignore
#---#--------------------------------------------------------------------------------------------------------


#---# profile ---------------------------------------------------------------------------------------
    path('u/@<username>/', account.user_profile, name='user-profile'),                  #|
    path('u/@<username>/edit', account.edit_profile, name='edit-profile'),              #|
    path('u/@<username>/edit_profile_picture', account.edit_profile_picture, name='edit-profile-picture'),              #|
    path('u/@<username>/enhance', account.enhance_profile, name='enhance-profile'),     #|
    path('settings/', account.account_settings, name='account-settings'),              #|
    path('dashboard/', account.account_dashboard, name='account-dashboard'),              #|
#---#------------------------------------------------------------------------------------------------


#---# connection ----------------------------------------------------------------------------------------
    path('u/@<username>/follow', message.chatroom_delete_view, name='follow-user'),         #|
    path('u/@<username>/unfollow', message.chatroom_delete_view, name='un-follow-user'),    #|
#---#----------------------------------------------------------------------------------------------------


#---# auth ------------------------------------------------------
    path('signin/', auth.signin, name='signin'),    #|
    path('signup/', auth.signup, name='signup'),    #|
    path('signout/', auth.signout, name='signout'), #|
    path('activate/<uidb64>/<token>', auth.activate, name="activate"),
    path('accounts/login/', auth.account_login, name='accounts-login'), #|
    path('check_username/', auth.check_username, name='check_username'), #|
    path('check_email/', auth.check_email, name='check_email'), #|
#---#------------------------------------------------------------


#---# search ---------------------------------------------------------------
    path('search/users/', views.user_search, name='user-search'),    #|
#---#-----------------------------------------------------------------------

    path('search/chatrooms/', views.search_mychatroom, name='chatroom-search'),    #|

#---# feed -----------------------------------------------------------------------------------------
    path('For_you/shorts', message.chatroom_delete_view, name='for-you-shorts'),      #|
    path('For_you/videos', message.chatroom_delete_view, name='for-you-videos'),      #|
    path('For_you/posts', for_you.recommend_view, name='for-you-posts'),        #|
                                                                                                  #|
    path('Following/videos', message.chatroom_delete_view, name='following-videos'),  #|
    path('Following/shorts', message.chatroom_delete_view, name='following-shorts'),  #|
    path('Following/posts', message.chatroom_delete_view, name='following-posts'),    #|
#---#-----------------------------------------------------------------------------------------------


#---# engagements ----------------------------------------------------------------------------------------
    path('post/<post_id>/like', engagements.like_post, name='like-post'),                    #|
    path('post/<post_id>/unlike', engagements.unlike_post, name='unlike-post'),                         #| # type: ignore
    path('post/<post_id>/comment', message.chatroom_delete_view, name='comment-post'),       #|
    path('post/<post_id>/delete', engagements.delete_post, name='delete-post'),       #|
    path('post/<post_id>/', message.chatroom_delete_view, name='post-details'),              #|
                                                                                                        #|
    path('short/<short_id>/like', engagements.like_short, name='like-short'),                #|
    path('short/<short_id>/unlike', engagements.unlike_short, name='unlike-short'),                     #| # type: ignore
    path('short/<short_id>/comment', message.chatroom_delete_view, name='comment-short'),    #|
    path('short/<short_id>/delete', engagements.delete_short, name='delete-short'),           #|
    path('short/<short_id>/', message.chatroom_delete_view, name='short-details'),           #|
                                                                                                        #|
    path('video/<video_id>/like', engagements.like_video, name='like-video'),                #|
    path('video/<video_id>/unlike', engagements.unlike_video, name='unlike-video'),                     #| # type: ignore
    path('video/<video_id>/comment', message.chatroom_delete_view, name='comment-video'),    #|
    path('video/<video_id>/delete', engagements.delete_video, name='delete-video'),           #|
    path('video/<video_id>/', message.chatroom_delete_view, name='video-details'),           #|

    path('create_post/', contents.create_post, name="create-post"), # type: ignore
#---#-----------------------------------------------------------------------------------------------------

#---# Marketplace -----------------------------------------------------------
    #path('marketplace/', marketplace.market_place, name='marketplace'),           #|

]

# copyright © 2024 . All rights reserved