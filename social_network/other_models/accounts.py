from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import User
import shortuuid
from django.urls import reverse


# Create your models here.
class ProfileCategory(models.Model):
    name = models.CharField(max_length=100)
    def __str__(self):
        return self.name

class Profile(models.Model):
    """user profile"""
    profile_id = models.CharField(max_length=128, unique=True, default=shortuuid.uuid)
    """unique profile id"""
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    """owner of the profile"""
    location = models.CharField(max_length=300, null=True, blank=True)
    category = models.ForeignKey(ProfileCategory, on_delete=models.SET_NULL,null=True, blank=True)
    """profile category"""
    #work = models.CharField(max_length=300, null=True, blank=True)
    website_url = models.URLField(max_length=50, null=True, blank=True)
    facebook_link = models.URLField(max_length=50, null=True, blank=True)
    twitter_link = models.URLField(max_length=50, null=True, blank=True)
    snapchat_link = models.URLField(max_length=50, null=True, blank=True)
    youtube_link = models.URLField(max_length=50, null=True, blank=True)
    linkedin_link = models.URLField(max_length=50, null=True, blank=True)
    tiktok_link = models.URLField(max_length=50, null=True, blank=True)
    instagram_link = models.URLField(max_length=50, null=True, blank=True)
    medium_link = models.URLField(max_length=50, null=True, blank=True)
    mastodon_link = models.URLField(max_length=50, null=True, blank=True)
    threads_link = models.URLField(max_length=50, null=True, blank=True)
    discord_link = models.URLField(max_length=50, null=True, blank=True)
    reddit_link = models.URLField(max_length=50, null=True, blank=True)
    pinterest_link = models.URLField(max_length=50, null=True, blank=True)
    github_link = models.URLField(max_length=50, null=True, blank=True)
    whatsapp_link = models.URLField(max_length=50, null=True, blank=True)
    telegram_link = models.URLField(max_length=50, null=True, blank=True)
    afriwallstreet_link = models.URLField(max_length=50, null=True, blank=True)
    bio = models.CharField(max_length=1000, null=True, blank=True)
    date_of_birth = models.DateField(max_length=8, null=True, blank=True)
    logo_icon = models.FileField(upload_to="media/company_logos", blank=True, null=True)

    last_updated = models.DateField(auto_now_add=True)

    #cover_photo = models.ImageField(default="media/cover.jpg", upload_to="media/user_coverimages")
    profile_picture = models.ImageField(default="media/default.jpg", upload_to="media/user_profileimages")

    verified = models.BooleanField(default=False)

    suspend = models.BooleanField(default=False)
    professional_mode = models.BooleanField(default=False)
    hide_birthday = models.BooleanField(default=True)


    #def get_absolute_url(self):
        #return reverse('profile', args=[str(self.user.username)])

    def __str__(self) -> str:
        return self.user.username
    def get_absolute_url(self):
        return reverse('user-profile', args=[str(self.user.username)])
    

def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)


def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()


post_save.connect(create_user_profile, sender=User)
post_save.connect(save_user_profile, sender=User)


class WorkExperience(models.Model):
    role = models.TextField(default="Works")
    profile = models.ForeignKey(User, on_delete=models.CASCADE)
    work_place = models.ForeignKey(Profile, on_delete=models.CASCADE)
    from_date = models.DateField(null=True, blank=True)
    to_date = models.DateField(null=True, blank=True)
    currently = models.BooleanField(default=False)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.profile.username} {self.role} {self.work_place.user.username}"


class Follow(models.Model):
    following = models.ForeignKey(User, on_delete=models.CASCADE, related_name='follower')
    follower = models.ForeignKey(User, on_delete=models.CASCADE, related_name='following')
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.follower.username} followed {self.following.username} on {self.created}"
    

class Connection(models.Model):
    requestee = models.ForeignKey(User, on_delete=models.CASCADE, related_name='requester')
    requester = models.ForeignKey(User, on_delete=models.CASCADE, related_name='requestee')
    accepted = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.requester.username} sent {self.requestee.username} a connection request on {self.created}"


class Bookmark(models.Model):
    bookmarker = models.ForeignKey(User, on_delete=models.CASCADE)
    from social_network.other_models.contents import Post, Short, Video

    post = models.ForeignKey(Post, on_delete=models.CASCADE, null=True, blank=True)
    short = models.ForeignKey(Short, on_delete=models.CASCADE, null=True, blank=True)
    video = models.ForeignKey(Video, on_delete=models.CASCADE, null=True, blank=True)
    
    created = models.DateTimeField(auto_now_add=True)


class UserInteraction(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    from social_network.other_models.contents import Post, Short, Video
    liked_post = models.ManyToManyField(Post, related_name='liked_by', blank=True)
    bookmarked_post = models.ManyToManyField(Post, related_name='saved_by', blank=True)
    commented_post = models.ManyToManyField(Post, related_name='commented_by', blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} interactions"
    
def create_user_interaction(sender, instance, created, **kwargs):
    if created:
        UserInteraction.objects.create(user=instance)


def save_user_interaction(sender, instance, **kwargs):
    instance.profile.save()


post_save.connect(create_user_interaction, sender=User)
post_save.connect(save_user_interaction, sender=User)
    

class Affiliate(models.Model):
    profile = models.ForeignKey(User, on_delete=models.CASCADE)
    company = models.ForeignKey(Profile, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.profile.username} is an affiliate of {self.company.user.username}"
    

class Highlight(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    from social_network.other_models.contents import Post, Short, Video
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    short = models.ForeignKey(Short, on_delete=models.CASCADE)
    video = models.ForeignKey(Video, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.profile.user.username}'s {self.name} highlight"


from django.contrib import admin

# Register your models here.

class UserInteractionAdmin(admin.ModelAdmin):
    list_display = ['user', 'created_at']

class ProfileAdmin(admin.ModelAdmin):
    list_editable = ['verified']
    list_display = ['user', 'verified']

class WorkExperienceAdmin(admin.ModelAdmin):
    list_display = ['profile', 'role', 'work_place']

class ProfileCategoryAdmin(admin.ModelAdmin):
    list_display = ['name']

class AffiliateAdmin(admin.ModelAdmin):
    list_display = ['profile', 'company', 'created']

class HighlightAdmin(admin.ModelAdmin):
    list_display = ['profile', 'name', 'post', 'short', 'video', 'created']


class FollowAdmin(admin.ModelAdmin):
    list_display = ['follower', 'following', 'created']