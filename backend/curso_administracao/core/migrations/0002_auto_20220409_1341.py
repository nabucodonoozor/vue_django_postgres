# Generated by Django 3.2.12 on 2022-04-09 16:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Departaments',
            new_name='Departments',
        ),
        migrations.RenameField(
            model_name='departments',
            old_name='DepartamentId',
            new_name='DepartmentId',
        ),
        migrations.RenameField(
            model_name='departments',
            old_name='DepartamentName',
            new_name='DepartmentName',
        ),
    ]