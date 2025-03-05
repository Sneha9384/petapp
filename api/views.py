from django.shortcuts import render
from django.http import JsonResponse

from api.routes.user_detail import UserDetail

# Create your views here.
def index(request):
    return JsonResponse({'msg':'hello'} ,status=200)
user_detail_routes=UserDetail()


