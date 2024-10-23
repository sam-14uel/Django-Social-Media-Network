from django.contrib import admin
from.other_models.accounts import Profile, ProfileAdmin, WorkExperience, WorkExperienceAdmin, UserInteraction, UserInteractionAdmin, ProfileCategory, ProfileCategoryAdmin
from.other_models.accounts import Affiliate, AffiliateAdmin, Highlight, HighlightAdmin, Follow, FollowAdmin
from.other_models.rooms import Chat, ChatAdmin, ChatRoom, ChatRoomAdmin, ChatMedia
from.other_models.contents import Poll, Post, Video, Short, ContentAdmin, React, ReactAdmin, Comment, CommentAdmin, PostMedia
from.other_models.bots import Bot, BotAdmin
from.other_models.media import ChatMediaAdmin, PostMediaAdmin

# Register your models here.

admin.site.register(Profile, ProfileAdmin)
admin.site.register(Follow, FollowAdmin)
admin.site.register(ProfileCategory, ProfileCategoryAdmin)
admin.site.register(Affiliate, AffiliateAdmin)
admin.site.register(Highlight, HighlightAdmin)


admin.site.register(WorkExperience, WorkExperienceAdmin)

# Register your models here.
admin.site.register(Chat, ChatAdmin)
admin.site.register(ChatRoom, ChatRoomAdmin)
admin.site.register(ChatMedia, ChatMediaAdmin)


# Register your models here.
admin.site.register(Post, ContentAdmin)
admin.site.register(PostMedia, PostMediaAdmin)
admin.site.register(Poll)
admin.site.register(Video, ContentAdmin)
admin.site.register(Short, ContentAdmin)

admin.site.register(React, ReactAdmin)
admin.site.register(Comment, CommentAdmin)

admin.site.register(UserInteraction, UserInteractionAdmin)

    
# Register your models here.
admin.site.register(Bot, BotAdmin)