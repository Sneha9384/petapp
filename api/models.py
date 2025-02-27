from django.db import models

# Create your models here.
class SampleDB(models.Model):
    Name=models.CharField(max_length=50)

    def __str__(self):
        return self.Name
class Animal(models.Model):
    name=models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Breed(models.Model):
    animal_name=models.ForeignKey("Animal", on_delete=models.CASCADE)
    breed_name=models.CharField(max_length=50,default=None)
    def __str__(self):
        return f'{self.animal_name} - {self.breed_name}'
