from django.shortcuts import render
from rest_framework import generics
from .models import User
from .serializers import UserSerializer
# Create your views here.


class UserAPIView(generics.ListAPIView):
    
    serializer_class = UserSerializer

    def get_queryset (self):
        return User.objects.all()