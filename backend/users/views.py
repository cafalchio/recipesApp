from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from .serializer import RegisterUserSerializer
from rest_framework.permissions import AllowAny

class CustomUserCreate(APIView):
    permission_classes = [AllowAny]
    
    def post(self, request, format='json'):
        serializer = RegisterUserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET'])
def current_user(request):
    user = request.user
    if (user):
        return Response({
            'email': user.email,
            'first_name': user.first_name,
            'last_name': user.last_name,
        })
    return Response(status=status.HTTP_400_BAD_REQUEST)
            
        
