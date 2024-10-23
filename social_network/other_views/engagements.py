from django.http import JsonResponse
from social_network.other_models.contents import Post, React, Short, Video, PostMedia
#from social_network.other_models.media import PostMedia
from django.views.decorators.http import require_POST

# post -----------------------------------------------------------------------------------------------------------
#@require_POST
def like_post(request, post_id):                                                                                                            
    post = Post.objects.get(content_id=post_id)                                                                                                                                                       
    liked = React.objects.filter(post=post, reacter=request.user).exists()                                
    if liked:                                                                                                   
        return JsonResponse({
            'message': f'liked post {post.content_id} already',
            'status': 'no_action',
            'like_status': 'loved',
        }, safe=False)                                                                            
    elif not liked:                                                                                                       
        like = React.objects.create(post=post, reacter=request.user)                                     
        return JsonResponse({
            'message': f'liked post {post.content_id} with like id = {like.react_id}',
            'status': 'successfull',
            'like_status': 'loved',
        }, safe=False)
    else:
        return JsonResponse({
            'message': f'error occured while liking post {post.content_id}',
            'status': 'error',
            'like_status': 'null',
        }, safe=False)                                                                           


#@require_POST
def unlike_post(request, post_id):                                                       
    post = Post.objects.get(content_id=post_id)                                                              
                                                                                                                
    liked = React.objects.filter(post=post, reacter=request.user).exists()                                
    if liked:                                                                                                   
        unlike = React.objects.filter(post=post, reacter=request.user).delete()  
        return JsonResponse({
            'message': f'successfully unliked post {post.content_id}',
            'status': 'successfull',
            'like_status': 'unloved',
        }, safe=False)   
    elif not liked:                                                                                                       
        return JsonResponse({
            'message': f'post {post.content_id} has not been liked by {request.user.username}',
            'status': 'no_action',
            'like_status': 'unloved',
        }, safe=False)
    else:
        return JsonResponse({
            'message': f'error occured while unliking post {post.content_id}',
            'status': 'error',
            'like_status': 'null',
        }, safe=False)

def delete_post(request, post_id):
    post = Post.objects.get(content_id=post_id)
    post_media = PostMedia.objects.filter(post_id=post.content_id)
    if post.poster == request.user:
        post.delete()
        post_media.delete()
        return JsonResponse({
            'message': f"successfully deleted post {post.content_id} with {post_media.count()} media",
            'status': 'successfull',
        }, safe=False)
    elif post.poster != request.user:
        return JsonResponse({
            'message': f"you can't delete post {post.content_id}",
            'status': 'permission_denied',
        })
    else:
        return JsonResponse({
            'message': f'error occured while deleting post {post.content_id}',
            'status': 'error'
        }, safe=False)
# ----------------------------------------------------------------------------------------------------------------


def like_short(request, short_id):
    short = Short.objects.get(content_id=short_id)

    liked = React.objects.filter(short=short, reacter=request.user).exists()
    if liked:                                                                                                   
        return JsonResponse({
            'message': f'liked short {short.content_id} already',
            'status': 'no_action'
        }, safe=False)                                                                            
    elif not liked:                                                                                                       
        like = React.objects.create(short=short, reacter=request.user)                                     
        return JsonResponse({
            'message': f'liked short {short.content_id} with like id = {like.react_id}',
            'status': 'successfull',
        }, safe=False)
    else:
        return JsonResponse({
            'message': f'error occured while liking short {short.content_id}',
            'status': 'error'
        }, safe=False)  
    

def unlike_short(request, short_id):                                                         
    short = Short.objects.get(content_id=short_id)                                                             
                                                                                                                    
    liked = React.objects.filter(short=short, reacter=request.user).exists()                                  
    if liked:                                                                                                   
        unlike = React.objects.filter(short=short, reacter=request.user).delete()  
        return JsonResponse({
            'message': f'successfully unliked short {short.content_id}',
            'status': 'successfull'
        }, safe=False)   
    elif not liked:                                                                                                       
        return JsonResponse({
            'message': f'short {short.content_id} has not been liked by {request.user.username}',
            'status': 'no_action'
        }, safe=False)
    else:
        return JsonResponse({
            'message': f'error occured while unliking short {short.content_id}',
            'status': 'error'
        }, safe=False)

def delete_short(request, short_id):
    short = Short.objects.get(content_id=short_id)
    if short.poster == request.user:
        short.delete()
        return JsonResponse({
            'message': f"successfully deleted short {short.content_id}",
            'status': 'successfull',
        }, safe=False)
    elif short.poster != request.user:
        return JsonResponse({
            'message': f"you can't delete short {short.content_id}",
            'status': 'permission_denied',
        }, safe=False)
    else:
        return JsonResponse({
            'message': f'error occured while deleting short {short.content_id}',
            'status': 'error'
        }, safe=False)                                                                         
# --------------------------------------------------------------------------------------------------------------------



# video -----------------------------------------------------------------------------------------------------------
def like_video(request, video_id):                                                                                                            
    video = Video.objects.get(content_id=video_id)                                                                                                                                                       
    liked = React.objects.filter(video=video, reacter=request.user).exists()                                
    if liked:                                                                                                   
        return JsonResponse({
            'message': f'liked video {video.content_id} already',
            'status': 'no_action'
        }, safe=False)                                                                            
    elif not liked:                                                                                                       
        like = React.objects.create(video=video, reacter=request.user)                                     
        return JsonResponse({
            'message': f'liked video {video.content_id} with like id = {like.react_id}',
            'status': 'successfull',
        }, safe=False)
    else:
        return JsonResponse({
            'message': f'error occured while liking video {video.content_id}',
            'status': 'error'
        }, safe=False)                                                                             
                                                                                                                
def unlike_video(request, video_id):                                                      
    video = Video.objects.get(content_id=video_id)                                                              
                                                                                                                
    liked = React.objects.filter(video=video, reacter=request.user).exists()                                
    if liked:                                                                                                   
        unlike = React.objects.filter(video=video, reacter=request.user).delete()  
        return JsonResponse({
            'message': f'successfully unliked video {video.content_id}',
            'status': 'successfull'
        }, safe=False)   
    elif not liked:                                                                                                       
        return JsonResponse({
            'message': f'video {video.content_id} has not been liked by {request.user.username}',
            'status': 'no_action'
        }, safe=False)
    else:
        return JsonResponse({
            'message': f'error occured while unliking video {video.content_id}',
            'status': 'error'
        }, safe=False)

def delete_video(request, video_id):
    video = Short.objects.get(content_id=video_id)
    if video.poster == request.user:
        video.delete()
        return JsonResponse({
            'message': f"successfully deleted video {video.content_id}",
            'status': 'successfull',
        }, safe=False)
    elif video.poster != request.user:
        return JsonResponse({
            'message': f"you can't delete video {video.content_id}",
            'status': 'permission_denied',
        }, safe=False)
    else:
        return JsonResponse({
            'message': f'error occured while deleting video {video.content_id}',
            'status': 'error'
        }, safe=False)                                                                            
# ----------------------------------------------------------------------------------------------------------------




