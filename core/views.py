from django.shortcuts import render, redirect

from .forms import PostForm
from .models import Post

def add_post(request):
    if request.method == 'POST':
        form = PostForm(request.POST, request.FILES)
        if form.is_valid():
            post = form.save(commit=False)
            post.user = request.user
            post.save()
            return redirect('home')  # Zmień na rzeczywistą nazwę widoku strony głównej
    else:
        form = PostForm()
    return render(request, 'core/add_post.html', {'form': form})


def home(request):
    posts = Post.objects.all().order_by('-created_at')
    return render(request, 'core/home.html', {'posts': posts})