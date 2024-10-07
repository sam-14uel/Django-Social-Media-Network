from social_network.other_models.accounts import Affiliate, Highlight, Profile
from django.shortcuts import render
from django.contrib.auth.models import User

from social_network.other_models.contents import Post, Short, Video
from social_network.other_models.media import PostMedia


def user_profile(request, username):
    user = User.objects.get(username=username)
    profile = Profile.objects.get(user=user)
    posts = Post.objects.filter(poster=user).order_by('-created')
    shorts = Short.objects.filter(poster=user).order_by('-created')
    videos = Video.objects.filter(poster=user).order_by('-created')
    highlights = Highlight.objects.filter(profile=profile).order_by('created')
    affiliates = Affiliate.objects.filter(profile=user).order_by('created')
    for post in posts:
        post_medias = PostMedia.objects.filter(post_id=post.content_id).order_by('created')[:1]
        context = {
            'profile': profile,
            'posts': posts,
            'shorts': shorts,
            'videos': videos,
            'highlights': highlights,
            'affiliates': affiliates,
            'post_medias': post_medias,
        }
        return render(request, 'accounts/profile.html', context)

    context = {
        'profile': profile,
        'posts': posts,
        'shorts': shorts,
        'videos': videos,
        'highlights': highlights,
        'affiliates': affiliates,
    }
    return render(request, 'accounts/profile.html', context)


def edit_profile(request, username):
    user = User.objects.get(username=request.user.username)
    profile = Profile.objects.get(user=user)
    posts = Post.objects.filter(poster=user).order_by('-created')
    shorts = Short.objects.filter(poster=user).order_by('-created')
    videos = Video.objects.filter(poster=user).order_by('-created')
    highlights = Highlight.objects.filter(profile=profile).order_by('created')
    affiliates = Affiliate.objects.filter(profile=user).order_by('created')
    for post in posts:
        #post_medias = PostMedia.objects.filter(post_id=post.content_id).order_by('-created')
        post_medias = PostMedia.objects.filter(post_id=post.content_id)[:1]
        context = {
            'post_medias': post_medias,
            'profile': profile,
            'posts': posts,
            'shorts': shorts,
            'videos': videos,
            'highlights': highlights,
            'affiliates': affiliates,
        }
        return render(request, 'accounts/profile.html', context)

    context = {
        'profile': profile,
        'posts': posts,
        'shorts': shorts,
        'videos': videos,
        'highlights': highlights,
        'affiliates': affiliates,
    }
    return render(request, 'accounts/edit_profile.html', context)