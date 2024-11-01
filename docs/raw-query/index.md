
# Raw query

```python title="modules/{module_name}/views.py"
from django_petra.petra_core import Response, ViewSet
from django_petra.raw_query.helpers import (
  fetch_all_to_dictionary,
  load_sql,
  raw_query_collection
)
from django.db import connection

class UserViewset(ViewSet):
  def raw_sql_user(self, request):
        query = load_sql('user.get_user')
      
        with connection.cursor() as cursor:
            cursor.execute(query)

            results = fetch_all_to_dictionary(cursor)
            
            output = raw_query_collection(
              request=request,
              results=results,
              wrap='users', # { wrap_name: []/{}}
              type='all' # paginate | single | all
            )
        return Response(output)
```

## serializer

you can add serializer with your raw query 

```python title="modules/{module_name}/views.py
import modules.{module_name}.serializers import UserSerializer
output = raw_query_collection(
              request=request,
              results=results,
              wrap='users', # { wrap_name: []/{}}
              type='all', # paginate | single | all
              serializer_class=UserSerializer
            )
```