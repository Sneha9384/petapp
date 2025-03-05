from django.contrib import admin
from . import models

# Register your models here.
admin.site.register(models.SampleDB)
admin.site.register(models.UserDetail)
admin.site.register(models.Species)
admin.site.register(models.Division)
admin.site.register(models.Breed)
admin.site.register(models.Pet)
admin.site.register(models.Food)
admin.site.register(models.Medicine)
admin.site.register(models.Product)
admin.site.register(models.Cart)
admin.site.register(models.OrderDetail)


