from django.http import JsonResponse
from django.views.decorators.http import require_POST
from django.contrib.auth.models import User

from social_network.other_models.contents import Post, Tag
from social_network.other_models.media import PostMedia


@require_POST
def create_post(request):
    if request.method == "POST":
        caption = request.POST["post_caption"]
        pictures = request.FILES["pictures"]

        post = Post.objects.create(poster=request.user, caption=caption)
        for picture in pictures:
            chat_media = PostMedia.objects.create(picture=picture, post_id=post.content_id)
            post.picture.add(chat_media)
            post.save()
            words = caption.split()
            result = []
            for word in words:
                if word.startswith('@'):
                    username = word[1:]
                    user = User.objects.filter(username=username).first()
                    #if user:
                        #post.mentions.add(user)
                        #return JsonResponse({
                            #"message": "post successfully created",
                            #"status": "success",
                            #"post_id": f"{post.content_id}",
                        #}, safe=False)
                elif word.startswith('#'):
                    hashtag = word[1:]
                    tag = Tag.objects.filter(title=hashtag).first()
                    if tag:
                        post.tag.add(tag)
                        post.save()
                        return JsonResponse({
                            "message": "post successfully created",
                            "status": "success",
                            "post_id": f"{post.content_id}",
                            "other_messages": f"added tag {tag.title} with tag_id={tag.tag_id}"
                        }, safe=False)
                    else:
                        new_tag = Tag.objects.create(title=hashtag)
                        post.tag.add(new_tag)
                        post.save()
                        return JsonResponse({
                            "message": "post successfully created",
                            "status": "success",
                            "post_id": f"{post.content_id}",
                            "other_messages": f"created and added tag {new_tag.title} with tag_id={new_tag.tag_id}"
                        }, safe=False)

            return JsonResponse({
                "message": "post successfully created",
                "status": "success",
                "post_id": f"{post.content_id}",
            }, safe=False)
        