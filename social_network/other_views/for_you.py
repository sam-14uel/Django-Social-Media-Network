# views.py in the recommendations app

from django.shortcuts import render
from django.contrib.auth.decorators import login_required

from social_network.other_models.contents import React
from social_network.other_models.contents import PostMedia
from .hybrid_recommendation import hybrid_recommendations

@login_required
def recommend_view(request):
    user = request.user
    recommendations = hybrid_recommendations(user, num_recommendations=5)

    # Prepare a list to store recommendations along with their like status
    recommended_posts = []

    for post in recommendations:
        like_status = React.objects.filter(reacter=request.user, post=post).exists()
        recommended_posts.append({
            'post': post,
            'like_status': like_status
        })
    context = {
        'recommendations': recommendations,
        'recommended_posts': recommended_posts,
    }
    return render(request, 'feed/for_you/posts.html', context)