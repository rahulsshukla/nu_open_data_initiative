import os

from .base import *
from dotenv import load_dotenv
load_dotenv()

try:
    env = os.environ['SETTINGS_ENV']
except:
    env = "DEVELOPMENT"

if env == 'PRODUCTION':
    from .production import *
elif env == "TESTING":
    from .testing import *
else:
    from .development import *
