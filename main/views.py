from django.shortcuts import render, redirect
from .models import Contact

def index(request):
    return render(request, 'main/newindex.html')

def about(request):
    return render(request, 'main/about.html')

def submit_form(request):
    if request.method == 'POST':
        name = request.POST.get('name')  
        email = request.POST.get('email')
        message = request.POST.get('message')
        Contact.objects.create(name=name, email=email, message=message)
        return redirect('/')  # or render a success template
    return render(request, 'newindex.html')
