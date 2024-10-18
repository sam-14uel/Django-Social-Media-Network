# content_based_filtering.py in the recommendations app

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
from social_network.other_models.contents import Post
from social_network.other_models.accounts import UserInteraction

def build_content_matrix():
    """
    Build the content matrix using TF-IDF
    """
    posts = Post.objects.all()
    if posts.exists():
        tfidf_vectorizer = TfidfVectorizer(stop_words='english')
        tfidf_matrix = tfidf_vectorizer.fit_transform([post.caption for post in posts])
        return tfidf_matrix
    return None

def recommend_posts_content_based(user, num_recommendations=5):
    """
    Recommend posts based on content similarity
    """
    tfidf_matrix = build_content_matrix()
    if tfidf_matrix is None or tfidf_matrix.shape[0] == 0:
        # No posts or empty matrix, return empty recommendations
        return []

    user_interactions = UserInteraction.objects.get(user=user)
    
    if user_interactions.liked_post.exists():
        # Use the latest liked post for content similarity
        latest_liked_post = user_interactions.liked_post.last()
        try:
            post_index = int(Post.objects.filter(id=latest_liked_post.id).values_list('id', flat=True)[0]) # type: ignore
        except IndexError:
            # Handle case where the post index is out of bounds
            return []

        # Ensure the post index is valid within the TF-IDF matrix
        if post_index >= tfidf_matrix.shape[0]:
            return []

        cosine_similarities = linear_kernel(tfidf_matrix[post_index:post_index+1], tfidf_matrix).flatten() # type: ignore
        related_indices = cosine_similarities.argsort()[:-num_recommendations-1:-1]

        recommended_posts = [Post.objects.all()[int(i)] for i in related_indices if int(i) != post_index]
        return recommended_posts

    # If the user hasn't liked any posts, return empty recommendations
    return []