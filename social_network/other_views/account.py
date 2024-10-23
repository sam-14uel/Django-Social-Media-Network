from social_network.other_models.accounts import Affiliate, Highlight, Profile, Follow, WorkExperience
from django.shortcuts import render
from django.contrib.auth.models import User
from django.shortcuts import redirect

from social_network.other_models.contents import Post, Short, Video, PostMedia
#from social_network.other_models.media import PostMedia


def user_profile(request, username):
    user = User.objects.get(username=username)
    profile = Profile.objects.get(user=user)
    posts = Post.objects.filter(poster=user).order_by('-created')
    shorts = Short.objects.filter(poster=user).order_by('-created')
    videos = Video.objects.filter(poster=user).order_by('-created')
    highlights = Highlight.objects.filter(profile=profile).order_by('created')
    affiliates = Affiliate.objects.filter(profile=user).order_by('created')
    work_experiences = WorkExperience.objects.filter(profile=user).order_by('from_date')

    # follow status
    follow_status = Follow.objects.filter(following=user, follower=request.user).exists()
    following_status = Follow.objects.filter(follower=user, following=request.user).exists()

    #------followers list---
    followers_list = Follow.objects.filter(following=user).order_by('-created')
    followings_list = Follow.objects.filter(follower=user).order_by('-created')
    #-------------------------------------

    #for post in posts:
        #post_medias = PostMedia.objects.filter(post_id=post).order_by('created')[:1]
        #context = {
            #'profile': profile,
            #'posts': posts,
            #'shorts': shorts,
            #'videos': videos,
            #'highlights': highlights,
            #'affiliates': affiliates,
            #'post_medias': post_medias,

            #'follow_status': follow_status,
            #'following_status': following_status,
            #'followers_list': followers_list,
            #'followings_list': followings_list,
            #'all_network': followings_list.count() + followers_list.count(),
            #'work_experiences': work_experiences,
        #}
        #return render(request, 'accounts/profile.html', context)

    context = {
        'profile': profile,
        'posts': posts,
        'shorts': shorts,
        'videos': videos,
        'highlights': highlights,
        'affiliates': affiliates,
        'follow_status': follow_status,
        'following_status': following_status,
        'followers_list': followers_list,
        'followings_list': followings_list,
        'all_network': followings_list.count() + followers_list.count(),
        'work_experiences': work_experiences,
    }
    return render(request, 'accounts/profile.html', context)


def edit_profile(request, username):
    user = User.objects.get(username=request.user.username)
    profile = Profile.objects.get(user=user)
    if request.method == 'POST':
        first_name = request.POST["inputFirstName"]
        last_name = request.POST['inputLastName']
        bio = request.POST["inputBio"]
        location = request.POST["inputLocation"]
        website_url = request.POST["inputWebsiteUrl"]
        #date_of_birth = request.POST["inputDateofBirth"]
        profile.bio = bio
        profile.location = location
        #profile.date_of_birth = date_of_birth
        profile.website_url = website_url
        profile.save()
        user.first_name = first_name
        user.last_name = last_name
        user.save()
        return redirect('user-profile', request.user.username)
    return render(request, 'accounts/edit_profile.html')

def edit_profile_picture(request, username):
    user = User.objects.get(username=request.user.username)
    profile = Profile.objects.get(user=user)
    if request.method == 'POST':

        profile_picture = request.FILES.get("inputImageUpload")
        profile.profile_picture = profile_picture
        profile.save()
        return redirect('edit-profile', request.user.username)
    #return render(request, 'accounts/edit_profile.html')
    return redirect('edit-profile', request.user.username)


def account_settings(request):
    return render(request, 'accounts/account_settings.html')

def account_dashboard(request):
    return render(request, 'accounts/dashboard.html')

def enhance_profile(request, username):
    return render(request, 'accounts/enhance_profile.html')

def add_post_highlight(request, username):
    user = User.objects.get(username=request.user.username)
    profile = Profile.objects.get(user=user)
    if request.method == 'POST':
        post_id = request.POST["post_id"]
        post_highlight_name = request.POST["post_highlight_name"]
        post = Post.objects.get(content_id=post_id)
    highlight = Highlight.objects.create(profile=profile, post=post, name=post_highlight_name)
    return redirect('user-profile', request.user.username)

def add_video_highlight(request, username):
    user = User.objects.get(username=request.user.username)
    profile = Profile.objects.get(user=user)
    if request.method == 'POST':
        video_id = request.POST["video_id"]
        video_highlight_name = request.POST["video_highlight_name"]
        video = Video.objects.get(content_id=video_id)
    highlight = Highlight.objects.create(profile=profile, video=video, name=video_highlight_name)
    return redirect('user-profile', request.user.username)

def add_short_highlight(request, username):
    user = User.objects.get(username=request.user.username)
    profile = Profile.objects.get(user=user)
    if request.method == 'POST':
        short_id = request.POST["short_id"]
        short_highlight_name = request.POST["short_highlight_name"]
        short = Short.objects.get(content_id=short_id)
    highlight = Highlight.objects.create(profile=profile, short=short, name=short_highlight_name)
    return redirect('user-profile', request.user.username)