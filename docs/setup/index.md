---
title: Setup drf-friend
description: Setup drf friend with django
keywords: [django_mail, mail, drf_mail]
---

## installation

### Install using Pipenv

1. Open a terminal and navigate to your project directory.
2. Create a virtual environment and activate it:

```shell
pipenv shell
```
3. Install drf-friend

```shell
pipenv install drf-friend
# install specific version
pipenv install drf-friend=0.0.16
```

### Install using pip

1. Open a terminal and navigate to your project directory.
2. create virtual env and activate that
3. Install drf-friend

```bash
pip install drf-friend
# install specific version
pip install drf-friend=0.0.16
```

## configuration

### init

```python title="{project}/__init__.py"
from drf_friend.core import initialize
initialize()
```

### settings

```python title="{project}/settings.py"
#------------
# DRF_FRIEND
#------------

REST_FRAMEWORK = {
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 2,
    
    'DEFAULT_RENDERER_CLASSES': [
        'rest_framework.renderers.JSONRenderer',
    ],
    
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny'
    ],
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.BasicAuthentication',  # enables simple command line authentication
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework.authentication.TokenAuthentication',
   ),
}

# The message broker (you can use RabbitMQ, Redis or others)
CELERY_BROKER_URL = os.getenv('CELERY_BROKER')

```

## directory tree
```bash
drf-friend-demo/
├── drf_demo (#project)
│   ├── __init__.py
│   ├── asgi.py
│   ├── celery.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── modules
│   └── user
│       ├── migrations
│       │   ├── 0001_initial.py
│       │   ├── 0002_alter_user_table.py
│       │   ├── 0003_alter_user_table.py
│       │   ├── 0004_alter_user_table.py
│       │   ├── 0005_user_is_active_user_username.py
│       │   ├── 0006_alter_user_username.py
│       │   └── __init__.py
│       ├── __init__.py
│       ├── admin.py
│       ├── apps.py
│       ├── forms.py
│       ├── models.py
│       ├── serializer.py
│       ├── tasks.py
│       ├── tests.py
│       ├── urls.py
│       └── views.py
├── Pipfile
├── Pipfile.lock
└── manage.py
```