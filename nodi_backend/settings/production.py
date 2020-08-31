import dj_database_url

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

ALLOWED_HOSTS = ['nodi-backend.herokuapp.com', '.nodi.nu']

SECURE_SSL_REDIRECT = True

# heroku uses a dynamically changing environment variable that this package uses
DATABASES = {}
DATABASES['default'] = dj_database_url.config(conn_max_age=600, ssl_require=True)