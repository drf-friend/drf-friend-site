---
title: dto - form validation
description: Django form validation - dto
---

## view

```python title="modules/{module_name}/views.py"
from rest_framework import status
from modules.user.forms import AddUserForm
from drf_friend.drf_dto import drf_dto
from drf_friend.drf_core import Response, ViewSet

class UserViewset(ViewSet):
  
  @drf_dto(form_class=AddUserForm)
  def add_user(self, request, form):
        # Process valid data
        name = form.cleaned_data['name']
        age = form.cleaned_data['age']
        phone = form.cleaned_data['phone']

        return Response({'data': "valid"}, status=status.HTTP_201_CREATED)
```

## forms

```python title="modules/{module_name}/forms.py"
from django import forms

class AddUserForm(forms.Form):
    name = forms.CharField(max_length=100, required=True)
    age = forms.IntegerField(required=True)
    phone = forms.CharField(max_length=11, required=True)

    def clean_phone(self):
        phone = self.cleaned_data.get('phone')
        if not phone.isdigit() or len(phone) != 11:
            raise forms.ValidationError('Phone must be a valid 11-digit number.')
        return phone
```

## urls

```python title="modules/{module_name}/urls.py"
from modules.user.views import UserViewset
from modules.common.router import Router, Route

routes = [
    Router.post('add/', UserViewset.add_user),
]

urlpatterns = [eval(route) for route in Route(routes).get_all_routes()]
```