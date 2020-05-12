import os

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ["localhost", '127.0.0.1']

# Database -- development
# https://docs.djangoproject.com/en/3.0/ref/settings/#databases
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'nodi',
        'USER': os.environ['DB_USER'],
        'PASSWORD': os.environ['DB_PSWD'],
        'HOST': os.environ['DB_HOST'],
        'PORT': '5432'
    }
}