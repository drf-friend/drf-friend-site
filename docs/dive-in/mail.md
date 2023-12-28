---
title: Mail
description: Easily send mail with django
keywords: [django_mail, mail, drf_mail]
---

## setting.py

```python
# template config
import os
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',  # Make sure this line is included
                'django.contrib.messages.context_processors.messages',
            ],
        },
    }, 
]

# email config
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = os.getenv('MAIL_HOST')
EMAIL_PORT = os.getenv('MAIL_PORT')
EMAIL_USE_TLS = True
EMAIL_USE_SSL = False
EMAIL_HOST_USER = os.getenv('MAIL_USERNAME')
EMAIL_HOST_PASSWORD = os.getenv('MAIL_PASSWORD')
DEFAULT_FROM_EMAIL=os.getenv('MAIL_FROM_ADDRESS')
```
## env

```bash
MAIL_HOST=""
MAIL_PORT="2525"
MAIL_USERNAME=""
MAIL_PASSWORD=""
MAIL_FROM_ADDRESS=""
```

## usage
```python
from drf_friend.mailer.send_mail import SendMail

context = {'recipient_name': 'mostafa'}

mail = SendMail()
mail.from_email("sender@example.com")\
    .to(["recipient@example.com"])\
    .subject("Subject")\
    .template(template_name='register_user',context=context )\
    .send()
```


## templates
```bash
templates/
└── mail
    ├── css
    │   ├── mail.css
    │   └── sample_mail.css
    ├── register_user.html
    └── sample_mail.html
```

### markup/html
-> markup example

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Template</title>
  <link rel="stylesheet" href="css/sample_mail.css">
</head>

<body>
  <table class="container">
    <tr>
      <td>
        <table class="header">
          <tr>
            <td>
              <h1>My Email</h1>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <table class="content">
          <tr>
            <td>
              <h2>Welcome to My Email</h2>
              <p>This is a sample email template with tables for layout.</p>
              <p>Click <a href="#">here</a> for more information.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <table class="footer">
          <tr>
            <td>
              &copy; 2023 My Email. All rights reserved.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

</body>

</html>
```


### style/css
-> style example

```css
/* Reset some default browser styles */
body,
table,
td {
  margin: 0;
  padding: 0;
}

/* Set a background color for the body */
body {
  background-color: #f0f0f0;
  font-family: "Arial", sans-serif;
}

/* Style the container table */
table.container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background-color: #ffffff;
}

/* Style the header table */
table.header {
  background-color: #333333;
  color: #ffffff;
  padding: 10px;
  width: 100%;
}

/* Style the main content table */
table.content {
  padding: 20px;
  width: 100%;
}

/* Style the footer table */
table.footer {
  background-color: #333333;
  color: #ffffff;
  text-align: center;
  padding: 10px;
  width: 100%;
}

/* Style links in the content */
table.content a {
  color: #007bff;
  text-decoration: none;
}
```

:::info
just add   `<link rel="stylesheet" href="css/sample_mail.`

drf automatic convert that inline css
:::

