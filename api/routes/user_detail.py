from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView


class UserDetail(APIView):
    def get(self,request,id=None):
        if id is not None:
            return self.get_id(request,id)
        else:
            return self.get_all(request)
    def get_id(self,request,id):
        return Response({'msg':'fetching with id'},status=status.HTTP_200_OK)
    def get_all(self,request):
        print('Hello')

        return Response({'msg':'fetching all'},status=status.HTTP_200_OK)
