from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from core.models import Departments, Employees
from core.serializers import DepartmentSerializer, EmployeeSerializer

# para controle dos arquivos
from django.core.files.storage import default_storage


@csrf_exempt
def departmentApi(request, id=0):
    
    if request.method == 'GET':
        departments = Departments.objects.all()
        departments_serializer = DepartmentSerializer(departments, many=True)
        return JsonResponse(departments_serializer.data, safe=False)
    
    elif request.method == 'POST':

        department_data = JSONParser().parse(request)
        departments_serializer = DepartmentSerializer(data=department_data)

        if departments_serializer.is_valid():
            department = departments_serializer.save()

            response = {
                "response": "Departamento adicionado com sucesso!!!",
                "data": department.toDict()
            }

            return JsonResponse(response, safe=False)
        
        return JsonResponse("Falha ao adicionar o departamento", safe=False)

    elif request.method == 'PUT':
        department_data = JSONParser().parse(request)
        department = Departments.objects.get(DepartmentId=department_data['DepartmentId'])
        departments_serializer = DepartmentSerializer(department, data=department_data)

        if departments_serializer.is_valid():
            departments_serializer.save()
            return JsonResponse("Departamento atualizado com sucesso", safe=False)
        
        return JsonResponse("Falha ao atualizar o departamento")
    
    elif request.method == 'DELETE':
        department = Departments.objects.get(DepartmentId=id)
        department.delete()
        return JsonResponse("Departamento deletado com sucesso!", safe=False)




@csrf_exempt
def employeeApi(request, id=0):
    
    if request.method == 'GET':
        employees = Employees.objects.all()
        employees_serializer = EmployeeSerializer(employees, many=True)
        return JsonResponse(employees_serializer.data, safe=False)
    
    elif request.method == 'POST':

        employee_data = JSONParser().parse(request)
        employees_serializer = EmployeeSerializer(data=employee_data)

        if employees_serializer.is_valid():
            employees_serializer.save()
            return JsonResponse("Empregado adicionado com sucesso!!!", safe=False)
        
        return JsonResponse("Falha ao adicionar o empregado", safe=False)

    elif request.method == 'PUT':
        employee_data = JSONParser().parse(request)
        employee = Employees.objects.get(EmployeeId=employee_data['EmployeeId'])
        employees_serializer = EmployeeSerializer(employee, data=employee_data)

        if employees_serializer.is_valid():
            employees_serializer.save()
            return JsonResponse("Empregado atualizado com sucesso", safe=False)
        
        return JsonResponse("Falha ao atualizar o empregado")
    
    elif request.method == 'DELETE':
        employee = Employees.objects.get(EmployeeId=id)
        employee.delete()
        return JsonResponse("Empregado deletado com sucesso!", safe=False)


@csrf_exempt
def SaveFile(request):

    file = request.FILES['file']
    file_name = default_storage.save(file.name, file)
    return JsonResponse(file_name, safe=False)
