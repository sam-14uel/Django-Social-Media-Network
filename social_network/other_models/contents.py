from django.db import models
import shortuuid
from django.contrib.auth.models import User

#from .reference import PostMedia

# Create your models here.

class Tag(models.Model):
    title = models.CharField(max_length=100, verbose_name="Tag")
    tag_id = models.CharField(max_length=128, unique=True, default=shortuuid.uuid) #type: ignore
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'Tag'
        verbose_name_plural = 'Tags'

    #def get_absolute_url(self):
        #return reverse('tags', args=[self.slug])
    
    def __str__(self):
        return self.title

class Post(models.Model):
    content_id = models.CharField(max_length=128, unique=True, default=shortuuid.uuid)
    poster = models.ForeignKey(User, on_delete=models.CASCADE)
    #from.media import PostMedia
    picture = models.ManyToManyField("PostMedia", blank=True)
    caption = models.CharField(max_length=1000000, verbose_name="Caption")
    created = models.DateTimeField(auto_now_add=True)
    tag = models.ManyToManyField(Tag, related_name="tags", blank=True)
    

    #def get_absolute_url(self):
        #return reverse('post-details', args=[str(self.id)])
    
    def __str__(self):
        return self.caption
    

class PostMedia(models.Model):
    picture = models.ImageField(upload_to='media/posts', verbose_name="Picture", null=True)
    post_id = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='post_media', null=True)
    created = models.DateTimeField(auto_now_add=True)

    media_id = models.CharField(max_length=128, unique=True, default=shortuuid.uuid, null=True)

    def __str__(self):
        return f"{self.post_id} + {self.created}"
    

class Video(models.Model):
    poster = models.ForeignKey(User, on_delete=models.CASCADE)
    content_id = models.CharField(max_length=128, unique=True, default=shortuuid.uuid)
    video = models.FileField(upload_to="media/videos")
    tag = models.ManyToManyField(Tag, blank=True)
    caption = models.CharField(max_length=100)
    description = models.TextField(max_length=100)
    created = models.DateTimeField(auto_now_add=True)
    

    #only_paid_subscribers_can_view = models.BooleanField(default=False)
    #stripe_price_id = models.CharField(max_length=1000, null=True, blank=True)

    #def get_absolute_url(self):
        #return reverse('video-details', args=[str(self.id)])

class VideoPlaylist(models.Model):
    poster = models.ForeignKey(User, on_delete=models.CASCADE)
    video_playlist_id = models.CharField(max_length=128, unique=True, default=shortuuid.uuid)
    video = models.ManyToManyField(Video)
    tag = models.ManyToManyField(Tag, blank=True)
    caption = models.CharField(max_length=100)
    description = models.TextField(max_length=100)
    created = models.DateTimeField(auto_now_add=True)

    
class Short(models.Model):
    poster = models.ForeignKey(User, on_delete=models.CASCADE)
    content_id = models.CharField(max_length=128, unique=True, default=shortuuid.uuid)
    short = models.FileField(upload_to="media/shorts")
    tag = models.ManyToManyField(Tag, blank=True)
    caption = models.CharField(max_length=100)
    created = models.DateTimeField(auto_now_add=True)
    

    #only_paid_subscribers_can_view = models.BooleanField(default=False)

    #def get_absolute_url(self):
        #return reverse('short-details', args=[str(self.id)])


class Poll(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    poll_id = models.CharField(max_length=128, unique=True, default=shortuuid.uuid)
    question = models.CharField(max_length=150)#question
    
    option_1 = models.CharField(max_length=150)
    option_2 = models.CharField(max_length=150)
    option_3 = models.CharField(max_length=150)
    option_4 = models.CharField(max_length=150, null=True, blank=True)
    option_5 = models.CharField(max_length=150, null=True, blank=True)
    option_6 = models.CharField(max_length=150, null=True, blank=True)
    option_7 = models.CharField(max_length=150, null=True, blank=True)
    option_8 = models.CharField(max_length=150, null=True, blank=True)
    option_9 = models.CharField(max_length=150, null=True, blank=True)
    option_10 = models.CharField(max_length=150, null=True, blank=True)

    option_1_voters = models.ManyToManyField(User, blank=True, related_name="opt_1_voters")
    option_2_voters = models.ManyToManyField(User, blank=True, related_name="opt_2_voters")
    option_3_voters = models.ManyToManyField(User, blank=True, related_name="opt_3_voters")
    option_4_voters = models.ManyToManyField(User, blank=True, related_name="opt_4_voters")
    option_5_voters = models.ManyToManyField(User, blank=True, related_name="opt_5_voters")
    option_6_voters = models.ManyToManyField(User, blank=True, related_name="opt_6_voters")
    option_7_voters = models.ManyToManyField(User, blank=True, related_name="opt_7_voters")
    option_8_voters = models.ManyToManyField(User, blank=True, related_name="opt_8_voters")
    option_9_voters = models.ManyToManyField(User, blank=True, related_name="opt_9_voters")
    option_10_voters = models.ManyToManyField(User, blank=True, related_name="opt_10_voters")

    created = models.DateTimeField(auto_now_add=True)



class React(models.Model):
    react_id = models.CharField(max_length=128, unique=True, default=shortuuid.uuid)
    reacter = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    post = models.ForeignKey(Post, on_delete=models.CASCADE, null=True, blank=True)
    short = models.ForeignKey(Short, on_delete=models.CASCADE, null=True, blank=True)
    video = models.ForeignKey(Video, on_delete=models.CASCADE, null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True)


class Comment(models.Model):
    comment_id = models.CharField(max_length=128, unique=True, default=shortuuid.uuid)
    commenter = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    post = models.ForeignKey(Post, on_delete=models.CASCADE, null=True, blank=True)
    short = models.ForeignKey(Short, on_delete=models.CASCADE, null=True, blank=True)
    video = models.ForeignKey(Video, on_delete=models.CASCADE, null=True, blank=True)
    body = models.TextField()
    #from social_network.other_models.media import CommentMedia
    media = models.ManyToManyField("CommentMedia", blank=True)
    created = models.DateTimeField(auto_now_add=True)

class CommentMedia(models.Model):
    media = models.FileField(upload_to='media/comments', null=True)

    media_is_img = models.BooleanField(default=False)
    media_is_vid = models.BooleanField(default=False)
    media_is_aud = models.BooleanField(default=False)
    media_is_doc = models.BooleanField(default=False)

    post_id = models.ForeignKey(Post, on_delete=models.CASCADE, null=True)
    short_id = models.ForeignKey(Short, on_delete=models.CASCADE, null=True)
    video_id = models.ForeignKey(Video, on_delete=models.CASCADE, null=True)

    media_id = models.CharField(max_length=128, unique=True, default=shortuuid.uuid, null=True)

    created = models.DateTimeField(auto_now_add=True)


from datetime import datetime

# Example: Track post view and time spent
class PostInteraction(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    viewed_at = models.DateTimeField(auto_now_add=True)
    time_spent = models.PositiveIntegerField(default=0)  # in seconds


from django.contrib import admin
class ContentAdmin(admin.ModelAdmin):
    list_display = ['poster', 'content_id', 'created']

class ReactAdmin(admin.ModelAdmin):
    list_display = ['reacter', 'post', 'short', 'video', 'created', 'react_id']

class CommentAdmin(admin.ModelAdmin):
    list_display = ['commenter', 'post', 'short', 'video', 'created', 'comment_id']
