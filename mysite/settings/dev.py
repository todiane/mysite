from .base import *
import sentry_sdk

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = "django-insecure-ly6c4(zb$#w4fvj%a)i59g8#jls^u!68230o-pv#d%9p(4^#on"

# SECURITY WARNING: define the correct hosts in production!
ALLOWED_HOSTS = ["*"]

EMAIL_BACKEND = "django.core.mail.backends.console.EmailBackend"


try:
    from .local import *
except ImportError:
    pass

# sentry settings
sentry_sdk.init(
    dsn="https://baac9ddbca83ea5f41f31e39f375af75@o4507209196699648.ingest.de.sentry.io/4507209272000592",
    # Set traces_sample_rate to 1.0 to capture 100%
    # of transactions for performance monitoring.
    traces_sample_rate=1.0,
    # Set profiles_sample_rate to 1.0 to profile 100%
    # of sampled transactions.
    # We recommend adjusting this value in production.
    profiles_sample_rate=1.0,
)