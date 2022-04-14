from django.conf.urls import url
from core import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    url(r'^departments$', views.departmentApi),
    url(r'^department/([0-9]+)$', views.departmentApi),
    url(r'^employees$', views.employeeApi),
    url(r'^employee/([0-9]+)$', views.employeeApi),

    url(r'^employee/savefile', views.SaveFile)

]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)