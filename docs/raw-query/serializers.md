
# Raw query serializer

The `RawQuerySerializer` provides a flexible approach to handle raw queries in Django Rest Framework (DRF). This document outlines various functionalities and examples of utilizing this serializer.

## Basic Usage

### All Fields

```python title="modules/{module_name}/serializers.py"
from django_petra.raw_query.serializer import RawQuerySerializer

class UserSerializer(RawQuerySerializer):
    class Meta:
        fields = []
        exclude = []
```

This configuration returns all fields from the serialized data.

### Specific Fields

```python title="modules/{module_name}/serializers.py
from django_petra.raw_query.serializer import RawQuerySerializer

class UserSerializer(RawQuerySerializer):
    class Meta:
        fields = ['id', 'name', 'email']
        exclude = []
```

This configuration returns only the specified fields - `id`, `name`, and `email`.

### Excluding Fields

```python title="modules/{module_name}/serializers.py
from django_petra.raw_query.serializer import RawQuerySerializer

class UserSerializer(RawQuerySerializer):
    class Meta:
        fields = []
        exclude = ['password']
```

it will returns all data except the `password`

## Advanced Usage

### Update Fields

you can update fields with `update_fields` method

```python title="modules/{module_name}/serializers.py
from django_petra.raw_query.serializer import RawQuerySerializer

class UserSerializer(RawQuerySerializer):
    class Meta:
        fields = ['firstname', 'lastname']
        exclude = []

    def update_fields(self, getField):
        return {
        'firstname': f"modified {getField('firstname')}
      }
```

The update_fields method allows you to modify the values of specific fields during serialization.

### New Field

you can add new field

```python title="modules/{module_name}/serializers.py
from django_petra.raw_query.serializer import RawQuerySerializer

class RawUserSerializer(RawQuerySerializer):
    
    full_name = serializers.SerializerMethodField()
    
    def get_full_name(self, obj):
        return f'{obj.firstname} {obj.lastname}'

    class Meta:
        fields = ['id', 'firstname', 'lastname', 'full_name']
        exclude = []

```

### Relation

```python title="modules/{module_name}/serializers.py"
from django_petra.raw_query.serializer import RawQuerySerializer

class UserSubjectsSerializer(RawQuerySerializer):
  class Meta:
        fields = ['id','title','code']

class RawUserSerializer(RawQuerySerializer):
    class Meta:
        fields = ['id','firstname','subjects']

    def bind_relations(self, getField):
        get_subjects = UserAddressSerializer(
            data=getField("subjects"),
            many = True
           )
        get_subjects.is_valid()
        
        return {
            'subjects': get_subjects.data
        }
```

The bind_relations method allows you to include related data in the serialized output, in this example, it adds the `subjects` relation to the serialized data.

## implement views

```python title="modules/{module_name}/views.py"
from django_petra.petra_core import Response, ViewSet
from django_petra.raw_query.helpers import (
  fetch_all_to_dictionary,
  load_sql,
  raw_query_collection
)
from django.db import connection

import modules.{module_name}.serializers import UserSerializer

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
              type='all', # paginate | single | all
              serializer_class=UserSerializer
            )
        return Response(output)
```
* `serializer_class=UserSerializer`


