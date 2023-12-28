---
title: Router/Urls
description: Router aka ulrls setup
---
## Router

```python title="moduels/{module_name}/urls.py"
from django.urls import path 
from modules.user.views import UserViewset
from drf_friend.router import Router, Route

routes = [
    Router.get('get/', UserViewset.get_users),
    Router.post('add/', UserViewset.add_user),
]

urlpatterns = [eval(route) for route in Route(routes).get_all_routes()]

```