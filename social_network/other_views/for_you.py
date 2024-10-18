# views.py in the recommendations app

from django.shortcuts import render
from django.contrib.auth.decorators import login_required

from social_network.other_models.contents import React
from social_network.other_models.media import PostMedia
from .hybrid_recommendation import hybrid_recommendations

@login_required
def recommend_view(request):
    user = request.user
    recommendations = hybrid_recommendations(user, num_recommendations=5)
    for post in recommendations:
        post_medias = PostMedia.objects.filter(post_id=post.content_id).order_by('created')
        like_status = React.objects.filter(reacter=request.user, post=post).exists()
        context = {
            'recommendations': recommendations,
            'post_medias': post_medias,
            'like_status': like_status,
        }
        return render(request, 'feed/for_you/posts.html', context)
    context = {
        'recommendations': recommendations,
    }
    return render(request, 'feed/for_you/posts.html', context)