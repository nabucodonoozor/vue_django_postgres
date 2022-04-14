from django.db import models


class Departments(models.Model):

    DepartmentId = models.AutoField(primary_key=True)
    DepartmentName = models.CharField(max_length=500)

    class Meta:
        verbose_name = 'Department'
        verbose_name_plural = 'Departments'

    def toDict(self):

        dep_dict = self.__dict__

        return {
            'DepartmentId': dep_dict['DepartmentId'],
            'DepartmentName': dep_dict['DepartmentName'],
        }

         

class Employees(models.Model):
    EmployeeId = models.AutoField(primary_key=True)
    EmployeeName = models.CharField(max_length=500)
    Department = models.CharField(max_length=500)
    DateOfJoining = models.DateField()
    PhotoFileName = models.CharField(max_length=500)

    class Meta:
        verbose_name = 'Employee'
        verbose_name_plural = 'Employees'
    
    def toDict(self):

        emp_dict = self.__dict__

        return {
            'EmployeeId': emp_dict['EmployeeId'],
            'EmployeeName': emp_dict['EmployeeName'],
            'Department': emp_dict['Department'],
            'DateOfJoining': emp_dict['DateOfJoining'],
            'PhotoFileName': emp_dict['PhotoFileName'],
            
        }

