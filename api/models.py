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
    species=models.ForeignKey('Species', on_delete=models.CASCADE)
    division=models.ForeignKey('Division', on_delete=models.CASCADE)
    breed=models.ForeignKey('Breed', on_delete=models.CASCADE)
    pet=models.CharField(max_length=50)
    age=models.IntegerField(default=None,null=True)
    gender=models.CharField( choices=gender_choices,max_length=50,default=None,null=True)

    def __str__(self):
        return f'{self.user}- petname:{self.pet}'
class Food(models.Model):
    breed_name=models.ForeignKey('Breed', on_delete=models.CASCADE)
    food_choices=[
        ('dry food','dry food'),
        ('wet food','wet food'),
        ('treats','treats')
    ]

    food_type=models.CharField(choices=food_choices, max_length=50,default=None,null=True)
    brand=models.CharField( max_length=50 ,default=None,null=True)
    food_name=models.CharField('Food', max_length=50,default=None,null=True)
    price=models.IntegerField(default=None,null=True)
    food_id=models.IntegerField(default=None,null=True)
    
    def __str__(self):
        return self.breed_name
    def save(self,*args, **kwargs):
        self.food_id= 'food'+self.food_id
        super().save(**args, **kwargs)

class Medicine(models.Model):
    breed_name=models.ForeignKey('Breed', on_delete=models.CASCADE)
    medicine_choices=[
        ('pharmacy','pharmacy'),
        ('supplements','supplements')
    ]
    medicine_type=models.CharField(choices=medicine_choices, max_length=50)
    medi_name=models.CharField( max_length=50,default=None,null=True)
    brand=models.CharField( max_length=50 ,default=None,null=True)
    price=models.IntegerField(default=None,null=True)
    medicine_id=models.IntegerField(default=None,null=True)

    def __str__(self):
        return self.breed_name
    def save(self,*args, **kwargs):
        self.medicine_id= 'medicine'+self.medicine_id
        super().save(**args, **kwargs)


class Product(models.Model):
    breed_name=models.ForeignKey('Breed', on_delete=models.CASCADE)
    product_type=[
        ('toys','toys'),
        ('accessories','accessories')
    ]
    
    product_name=models.CharField( choices=product_type,max_length=50)
    product=models.CharField('Product',max_length=50,default=None,null=True)
    brand=models.CharField( max_length=50 ,default=None,null=True)
    price=models.IntegerField(default=None,null=True)
    product_id=models.IntegerField(default=None,null=True)
    def __str__(self):
        return f'{self.breed_name}-{self.product_name}'
    def save(self,*args, **kwargs):
        self.product_id= 'product'+self.product_id
        super().save(**args, **kwargs)

class Ratings(models.Model):
    user_name=models.ForeignKey( 'UserDetail', on_delete=models.CASCADE)
    message=models.TextField()
    star_choices=[
        ('1','1'),
        ('2','2'),
        ('3','3'),
        ('4','4'),
        ('5','5')

    ]
    star=models.CharField(choices=star_choices, max_length=50)
    def __str__(self):
        return self.user_name
    
class Cart(models.Model):
    item_id=models.CharField(max_length=50)
    quantity=models.IntegerField()
    user=models.ForeignKey('UserDetail', on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.item_id}-{self.user}-{self.quantity}'
        
class OrderDetail(models.Model):
    user=models.ForeignKey('UserDetail', on_delete=models.CASCADE)
    phone_number=models.IntegerField()
    country=models.CharField(max_length=50)
    state=models.CharField( max_length=50)
    pincode=models.IntegerField()
    district=models.CharField( max_length=50)
    street=models.CharField( max_length=50)
    landmark=models.CharField( max_length=50)
    door_no=models.IntegerField()
