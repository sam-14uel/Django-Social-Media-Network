# hybrid_recommendation.py in the recommendations app

from .collaborative_filtering import recommend_posts_collaborative
from .content_based_filtering import recommend_posts_content_based
from social_network.views import get_social_recommendations

def hybrid_recommendations(user, num_recommendations=5):
    """
    Hybrid recommendation combining collaborative and content-based filtering
    """
    collab_recs = recommend_posts_collaborative(user, num_recommendations=10)
    content_recs = recommend_posts_content_based(user, num_recommendations=10)


    #trending_recs = list(get_trending_posts(num_recommendations=10))
    social_recs = list(get_social_recommendations(user, num_recommendations=10))
    
    # Combine and weigh the results
    combined_recs = collab_recs[:5] + content_recs[:4] + social_recs[:2]
    
    # Remove duplicates and slice to the top `num_recommendations`
    combined_recs = list(set(combined_recs))[:num_recommendations]
    return combined_recs