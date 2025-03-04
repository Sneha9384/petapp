from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.hashers import check_password

# Create your models here.
class SampleDB(models.Model):
    name=models.CharField(max_length=50)

    def __str__(self):
        return self.name  
class UserDetail(AbstractUser):
    address=models.CharField( max_length=50)
    country=models.CharField( max_length=50)
    def __str__(self):
        return self.user.username
    groups=models.ManyToManyField(
        'auth.Group',
        related_name='user_details_groups',
        blank=True
    )
    user_permissions=models.ManyToManyField(
        'auth.permission',
        related_name='user_detail_permission',
        blank=True
    )
    def check_password(self, raw_password):
        return check_password(raw_password,self.password)
    def __str__(self):
        return self.username

class Species(models.Model):
    
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name
    
class Division(models.Model):
    species_name=models.ForeignKey('Species',on_delete=models.CASCADE)
    division_name=models.CharField( max_length=50)
     
    def __str__(self):
         return self.division_name

class Breed(models.Model):
    division_name=models.ForeignKey('Division', on_delete=models.CASCADE)
    breed_name=models.CharField(max_length=50)

    def __str__(self):
        return f'{self.division_name}-{self.breed_name}'
class Pet(models.Model):
    gender_choices=[
        ('male','male'),
        ('female','female')
    ]
    user=models.ForeignKey(UserDetail, on_delete=models.CASCADE)
    species_name=models.ForeignKey('Species', on_delete=models.CASCADE)
    division_name=models.ForeignKey('Division', on_delete=models.CASCADE)
    breed_name=models.ForeignKey('Breed', on_delete=models.CASCADE)
    pet_name=models.CharField(max_length=50)
    age=models.IntegerField(default=None,null=True)
    gender=models.CharField( choices=gender_choices,max_length=50,default=None,null=True)

    def __str__(self):
        return f'{self.user}- petname:{self.pet_name}'
class Food(models.Model):
    breed_name=models.ForeignKey('Breed', on_delete=models.CASCADE)
    food_type=[
        ('dry food','dry food'),
        ('wet food','wet food'),
        ('treats','treats')
    ]
    food_name=models.CharField(choices=food_type, max_length=50,default=None,null=True)
    brand_name=models.CharField( max_length=50 ,default=None,null=True)
    
    def __str__(self):
        return self.breed_name
class Medicine(models.Model):
    breed_name=models.ForeignKey('Breed', on_delete=models.CASCADE)

    def __str__(self):
        return self.breed_name

class Product(models.Model):
    breed_name=models.ForeignKey('Breed', on_delete=models.CASCADE)
    product_type=[
        ('toys','toys'),
        ('accessories','accessories')
    ]
    
    product_name=models.CharField( choices=product_type,max_length=50)
    product=models.CharField('Product',max_length=50,default=None,null=True)
    def __str__(self):
        return f'{self.breed_name}-{self.product_name}'