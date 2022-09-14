from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Program(models.Model):
    #A user can sign up for one program at a time.
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200)
    image = models.ImageField(null=True, blank=True)
    description = models.TextField()
    date = models.DateField()
    ageGroup = models.CharField(max_length=50) 
    fees = models.DecimalField(max_digits=6, decimal_places=2)
    _id = models.AutoField(primary_key=True, editable=False)
    
    def __str__(self):
        return self.name
    
class Order(models.Model):
    user = models.OneToOneField(User, on_delete=models.SET_NULL, null=True)
    paymentMethod = models.CharField(max_length=200)
    # discount = models.DecimalField(max_digits=6, decimal_places=2)
    totalFees = models.DecimalField(max_digits=6, decimal_places=2)
    isPaid = models.BooleanField(default=False)
    paidAt = models.DateTimeField(auto_now_add=False, null=True)
    isAccepted = models.BooleanField(default=False)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)
    
    def __str__(self):
        return str(self.createdAt)  #self.createdAt of self.name ?    