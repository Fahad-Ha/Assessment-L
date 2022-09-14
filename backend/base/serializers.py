from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Program


class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    civil_id_number = serializers.SerializerMethodField()
    
    class Meta:
        model = User
        fields = ['id', '_id' ,'username', 'email', 'name', 'is_staff']
        
    def get__id(self, obj):
        return obj.id    
        
    def get_name(self, obj):
        name = obj.first_name
        return name    
    
   


class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)
    
    class Meta:
        model = User
        fields = ['id', '_id' ,'username', 'email', 'name', 'is_staff', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)
    
    
class ProgramSerializer(serializers.ModelSerializer):
    class Meta:
        model = Program
        fields = '__all__'
        
      
        
        