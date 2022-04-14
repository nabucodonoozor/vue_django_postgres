from django.contrib import admin
from django.urls import path

from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

from django.conf.urls import url, include

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^', include('core.urls'))
]

admin.AdminSite.site_header = 'Sistema Administrativo - Curso'
admin.AdminSite.site_title = 'Sistema Administrativo - Curso'