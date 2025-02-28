from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
from .forms import PostForm
from .models import Post
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from geopy.geocoders import Nominatim
from geopy.exc import GeocoderTimedOut
from django.views.decorators.http import require_POST
from django.contrib.auth.decorators import login_required
from .models import Like, Post

@login_required
@require_POST
def toggle_like(request, post_id):
    post = Post.objects.get(id=post_id)
    user = request.user

    # Sprawdź, czy użytkownik już polubił ten post
    like, created = Like.objects.get_or_create(user=user, post=post)

    if not created:
        # Jeśli like już istnieje, usuń go (odlike'uj)
        like.delete()
        post.likes_count -= 1
        liked = False
    else:
        # Jeśli like nie istnieje, dodaj go
        post.likes_count += 1
        liked = True

    post.save()

    return JsonResponse({
        'liked': liked,
        'likes_count': post.likes_count
    })

def home(request):
    posts = Post.objects.all().order_by('-created_at')
    return render(request, 'core/home.html', {'posts': posts})

def get_location_name(lat, lon):
    geolocator = Nominatim(user_agent="moments_app")
    try:
        location = geolocator.reverse(f"{lat}, {lon}", exactly_one=True)
        return location.address if location else "Unknown Location"
    except GeocoderTimedOut:
        return "Location unavailable"

@csrf_exempt
def update_location(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            lat = data.get('lat')
            lon = data.get('lon')
            if lat and lon:
                location_name = get_location_name(lat, lon)
                return JsonResponse({'location': location_name})
            return JsonResponse({'error': 'Missing coordinates'}, status=400)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    return JsonResponse({'error': 'Invalid request method'}, status=400)

def add_post(request):
    if request.method == 'POST':
        form = PostForm(request.POST, request.FILES)
        if form.is_valid():
            post = form.save(commit=False)
            post.user = request.user
            
            # Pobierz lokalizację z ukrytego pola formularza
            location = request.POST.get('location', 'Unknown Location')
            post.location = location
            
            post.save()
            return redirect('home')
    else:
        form = PostForm()
    return render(request, 'core/add_post.html', {'form': form})

def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user:
            login(request, user)
            return redirect('home')
        messages.error(request, 'Błędne dane logowania')
        return redirect('home')


def register_view(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Rejestracja udana! Zaloguj się')
            return redirect('home')
        else:
            for field, errors in form.errors.items():
                for error in errors:
                    messages.error(request, f"{field}: {error}")
    return redirect('home')

def logout_view(request):
    logout(request)
    return redirect('home')

