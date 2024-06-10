from django import forms
# from django.core.exceptions import ValidationError
from django.contrib.auth.models import User
# from .models import UserProfileInfo
class UserForm(forms.ModelForm):
  class Meta():
    model = User
    fields = ('username', 'email', 'password')
    widgets = {
      'username': forms.TextInput(attrs={
        'placeholder': 'Username',
        'class': 'focus:outline-none'
      }),
      'email': forms.EmailInput(attrs={
        'placeholder': 'email',
        'class': 'focus:outline-none'
      }),
      'password': forms.PasswordInput(attrs={
        'placeholder': 'password',
        'class': 'focus:outline-none'
      }),
    }
