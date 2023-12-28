---
title: Pagination
description: Implement pagination on your project easily with the paginate method
---

# Paginate

Implement pagination on your project easily with the paginate method

## `paginate()`

```python
from modules.user.models import User
from modules.user.serializer import UserSerializer
from drf_friend.drf_core import Response, ViewSet
from drf_friend.paginate import paginate

class UserViewset(ViewSet):
  def get_users(self, request):
    query = User
    query = query.objects.filter().order_by('-created')
    query = query.all()
    data = paginate(request=request, queryset=query, serializer_class=UserSerializer, per_page=4, wrap='users')
    
    return Response(data, status=status.HTTP_200_OK)
```

## Parameters
* `request`: The Django HttpRequest object.
* `queryset`: The queryset to be paginated.
* `serializer_class`: The DRF serializer class used to serialize the paginated data.
* `per_page` (optional): The number of items to display per page. Default is set to 10.
* `wrap` (optional): The key to wrap the serialized data in the response. Default is set to 'data'.

## output

```bash title="api endpoint"
http://localhost:8000/user/get?page=1&per_page=10
```

```json
{
    "per_page": 10,
    "current_page": 1,
    "last_page": 1,
    "next_page_url": null,
    "prev_page_url": null,
    "total": 0,
    "from": 0,
    "to": 0,
    "users": []
}
```