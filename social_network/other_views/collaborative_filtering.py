# collaborative_filtering.py in the recommendations app

from django.contrib.auth.models import User
from social_network.other_models.accounts import UserInteraction
from social_network.other_models.contents import Post

def get_user_similarities(target_user):
    """
    Compute user similarities based on interactions
    """
    # Fetch the UserInteraction instance for the target user
    target_interactions = UserInteraction.objects.get(user=target_user)
    other_users = UserInteraction.objects.exclude(user=target_user)

    similarities = {}

    for other_user_interaction in other_users:
        # Calculate similarity (Jaccard, Cosine, etc. Here, using Jaccard Index as an example)
        common_likes = set(target_interactions.liked_post.all()) & set(other_user_interaction.liked_post.all())
        total_likes = set(target_interactions.liked_post.all()) | set(other_user_interaction.liked_post.all())
        if total_likes:
            similarity = len(common_likes) / len(total_likes)
        else:
            similarity = 0
        
        # Store the similarity with the actual user object
        similarities[other_user_interaction.user] = similarity

    # Sort users by similarity score in descending order
    sorted_similarities = sorted(similarities.items(), key=lambda x: x[1], reverse=True)
    return sorted_similarities

def recommend_posts_collaborative(user, num_recommendations=5):
    """
    Recommend posts based on collaborative filtering
    """
    similar_users = get_user_similarities(user)
    recommended_posts = []

    # Fetching the UserInteraction object of the requesting user
    user_interaction = UserInteraction.objects.get(user=user)

    for similar_user, similarity in similar_users:
        # Fetch the UserInteraction instance for the similar user
        similar_user_interactions = UserInteraction.objects.get(user=similar_user)

        # Exclude posts liked by the target user through UserInteraction
        liked_posts_by_similar_user = similar_user_interactions.liked_post.exclude(
            id__in=user_interaction.liked_post.values_list('id', flat=True)
        )

        recommended_posts.extend(liked_posts_by_similar_user)

    # Return the top `num_recommendations` posts
    return list(set(recommended_posts))[:num_recommendations]

