# templatetags/render_mentions_and_hashtags.py
from django import template
from django.utils.safestring import mark_safe
from django.contrib.auth.models import User
from social_network.other_models.contents import Tag

register = template.Library()

@register.filter('render_mentions_and_hashtags')
def render_mentions_and_hashtags(text):
    words = text.split()
    result = []
    for word in words:
        if word.startswith('@'):
            username = word[1:]
            user = User.objects.filter(username=username).first()
            if user:
                result.append(f'<a class="mention" href="/u/@{user.username}/">{word}</a>')
            else:
                result.append(word)
        elif word.startswith('#'):
            hashtag = word[1:]
            tag = Tag.objects.filter(title=hashtag).first()
            if tag:
                result.append(f'<a class="hashtag" href="/hashtag/{hashtag}">{word}</a>')
            else:
                result.append(word)
        elif word.startswith('https://'):
            link = word
            result.append(f'<a target="_blank" class="hashtag" href="{link}">{word}</a>')
        elif word.startswith('http://'):
            link = word
            result.append(f'<a target="_blank" class="hashtag" href="{link}">{word}</a>')
        elif word.startswith('www.'):
            link = word
            result.append(f'<a target="_blank" class="hashtag" href="{link}">{word}</a>')
        else:
            result.append(word)
    return mark_safe(' '.join(result))