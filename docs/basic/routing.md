---
title: Routing
description: Router aka ulrls setup
---

To set up routing for URLs in your Django application, you can use the `Router` class provided by the `drf_friend.router` module. Below is an example of how to configure routing using the `Router` class.

## Router

```python title="moduels/{module_name}/urls.py"
from django.urls import path 
from modules.user.views import UserViewset
from drf_friend.router import Router, Route

routes = [
    Router.get('get/', UserViewset.get_users),
    Router.post('add/', UserViewset.add_user),
    # Router.put()
    # Router.patch()
    # Router.delete()
]

urlpatterns = [eval(route) for route in Route(routes).get_all_routes()]

```

## params
* you can use angle brackets `<>` for params
* `Router.get('get/<str:user_id>', UserViewset.get_user)`,
* [converter lists](https://docs.djangoproject.com/en/5.0/topics/http/urls/#path-converters) - str,int,slug(this-is-slug),uuid(075194d3-6885-417e-a8a8-6c931e272f00)

:::note
* No need leading slash