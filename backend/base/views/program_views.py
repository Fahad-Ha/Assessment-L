from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework import status

from base.models import Program
from base.serializers import ProgramSerializer

#For Programs List
@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def getPrograms(request):
    programs = Program.objects.all() 
    serializer = ProgramSerializer(programs, many=True)
    return Response(serializer.data)

#For Program Details
@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def getProgram(request, pk):
    program = Program.objects.get(_id=pk)
    serializer = ProgramSerializer(program, many=False)
    return Response(serializer.data)