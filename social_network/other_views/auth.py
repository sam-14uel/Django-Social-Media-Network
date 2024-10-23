from django.shortcuts import get_object_or_404, redirect, render
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth import login
from django.core.mail import EmailMessage
from django.contrib.auth.decorators import login_required
from django.template.loader import render_to_string
from django.contrib import messages
from django.contrib.sites.shortcuts import get_current_site
from django.test import tag
from django.urls import resolve, reverse
from django.utils.encoding import force_bytes, force_str
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from requests import post
from APP_PROJECT import settings
from django.core.mail import send_mail
from django.contrib import auth

from django.shortcuts import render
from.tokens import generate_token

def signup(request):

    if request.method == "POST":

        username = request.POST['username']
        firstname = request.POST['firstname']
        lastname = request.POST['lastname']
        email = request.POST['email']
        pass1 = request.POST['pass1']
        pass2 = request.POST['pass2']

        if User.objects.filter(username=username):
            messages.error(request, "Username already exist! please try other username")
            return redirect('signup')

        if User.objects.filter(email=email):
            messages.error(request, "Email already in use ")
            return redirect('signup')
        
        if len(username)>10:
            messages.error(request, "Username must be less than 10 characters")
            return redirect("signup")

        if pass1 != pass2:
            messages.error(request, "Passwords do not match")
            return redirect("signup")
        
        if len(pass1)<8:
            messages.error(request, "Password is too short it should be up to 8")
            return redirect("signup")

        if not username.isalnum():
            messages.error(request, "Username must be alphanumeric")
            return redirect("signup") 

        myuser = User.objects.create_user(username, email, pass1 )
        myuser.first_name = firstname
        myuser.last_name = lastname
        myuser.username = username
        myuser.is_active = False
        myuser.save()
        #activateEmail(request, username, email)
        messages.success(request, f"you have successfully created an account we have sent a mail to @{email} please check your inbox and confirm your email\nif you can't find our message you can check your spam folder note that link is valid for 15minutes from now ")

        # welcome email

        subject = "WELCOME TO NOES AI"
        message = "Hello" + myuser.first_name +"! \n" + "Welcome to NOES AI! \n(you are receiving this mail because an account has been created with " + myuser.email +"\n Thank you for creating an account in noesai \n we have also sent you a mail with a link to confirm your email and activate your account \n\n Thanks once again! \n\n\n samuelchimdi@noesai\n(founder of noesai)"
        from_email = settings.EMAIL_HOST_USER
        to_list = [myuser.email]
        send_mail(subject, message, from_email, to_list, fail_silently=True)

        # Email address confirmation

        current_site = get_current_site(request)
        email_subject = "Email confirmation @ NOES AI"
        message2 = render_to_string('auth/email_confirmation.html',{
            'name': myuser.first_name,
            'domain': current_site.domain,
            'uid': urlsafe_base64_encode(force_bytes(myuser.pk)),
            'token': generate_token.make_token(myuser),
        })
        email = EmailMessage(
            email_subject,
            message2,
            settings.EMAIL_HOST_USER,
            [myuser.email],
        )
        #email.fail_silently = True
        email.send()

        return redirect('signin')


    return render(request, "auth/signup.html")



def signin(request):

    if request.method == 'POST':
        
        username = request.POST['username']
        password = request.POST['password']

        myuser = auth.authenticate(username=username, password=password)

        if myuser is not None:
            auth.login(request, myuser)
            messages.success(request, f"Hey 👋 @{username} Welcome to Afriwallstreet")
            return redirect('/')

        else:
            messages.error(request, "Wrong username or password")
            return render(request, "auth/signin.html")

    return render(request, "auth/signin.html")

def activate(request, uidb64, token):
    try:
        uid = force_bytes(urlsafe_base64_decode(uidb64))
        myuser = User.objects.get(pk=uid)
    except (TypeError, ValueError, OverflowError, User.DoesNotExist):
        myuser = None

    if myuser is not None and generate_token.check_token(myuser, token):
        myuser.is_active = True
        myuser.save()
        login(request, myuser)
        return redirect('home')
    else:
        return render(request, 'auth/activation_failed.html')


def signout(request):
    auth.logout(request)
    messages.success(request, f"successfully logged out", "success")
    return redirect('signin')


def account_login(request):
    return redirect('signin')

def check_username(request):
    username = request.GET.get('username')
    exists = User.objects.filter(username=username).exists()
    return JsonResponse({
        'exists': exists,
    })


def check_email(request):
    email = request.GET.get('email')
    exists = User.objects.filter(email=email).exists()
    return JsonResponse({
        'exists': exists,
    })

    
    
