from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from django.http import HttpResponseRedirect, HttpResponse
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from .forms import UserForm

# Create your views here.
def beranda(req):
  return render(req, 'beranda.html', {'halaman_aktif': 'beranda'})

def kelas(req):
  return render(req, 'kelas.html', {'halaman_aktif': 'kelas'})

def kelas_detail(req):
  return render(req, 'kelas-detail.html', {'halaman_aktif': 'kelas'})

def roadmap(req):
  return render(req, 'roadmap.html', {'halaman_aktif': 'roadmap'})

def roadmap_detail(req):
  return render(req, 'roadmap-detail.html', {'halaman_aktif': 'roadmap'})

def mentoring(req):
  return render(req, 'mentoring.html', {'halaman_aktif': 'mentoring'})

def mentoring_detail(req):
  return render(req, 'mentoring-detail.html', {'halaman_aktif': 'mentoring'})

def register(req):
  registered =  False

  if req.method == 'POST':
    user_form = UserForm(data=req.POST)
    if user_form.is_valid():
      user = user_form.save()
      user.set_password(user.password)
      user.save()
      registered = True
    else:
      print(user_form.errors)
  else:
    user_form = UserForm()
    
  return render(req, 'register.html', {
    'halaman_aktif': 'register',
    'user_form': user_form,
    'registered': registered
  })

def login_user(req):
  if req.method == "POST":
    # email = req.POST.get("email")
    username = req.POST.get("username")
    password = req.POST.get("password") 
    
    # print(email)

    user = authenticate(username=username, password=password)

    if user:
      if user.is_active:
        login(req, user)
        return HttpResponseRedirect(reverse("beranda"))
      else:
        return HttpResponse("Account not active")
    else:
      print("Someone tried to login and failed")
      print(f"username: {username} and password: {password}")
      return HttpResponse("Invalid login details supplied!")
  else:
    return render(req, "login.html", {'halaman_aktif': 'login'})

@login_required
def user_logout(request):
  logout(request)
  return HttpResponseRedirect(reverse("beranda"))

@login_required
def dashboard(req):
  return render(req, 'dashboard.html', {'halaman_aktif': 'dashboard'})


@login_required
def manage_course(req):
  return render(req, 'dashboard.html', {'halaman_aktif': 'dashboard'})