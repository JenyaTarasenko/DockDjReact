from django.db import models
from django.db import models


class Project(models.Model):
    name = models.CharField(max_length=200, verbose_name='Название проектов')
    slug = models.SlugField(unique=True, blank=True, null=True, verbose_name="Слаг")
    description = models.TextField(verbose_name="Описание проекта")
    image = models.ImageField(upload_to='products/', null=True, blank=True, verbose_name='Название проектов дo 1')
    
    
    def __str__(self):
        return self.name
