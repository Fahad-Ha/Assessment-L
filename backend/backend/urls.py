from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html')),
    path('api/programs/', include('base.urls.program_urls')),
    path('api/users/', include('base.urls.user_urls')),
    path('api/register/', include('base.urls.register_urls')),

    
]

#For images which takes the media urls from the media urls in settings
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)