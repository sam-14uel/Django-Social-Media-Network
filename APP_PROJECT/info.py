EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"
EMAIL_PORT = 465  # Port for SSL
EMAIL_USE_TLS = False  # Set TLS to False for SSL
EMAIL_USE_SSL = True  # Enable SSL
EMAIL_HOST = 'mail.privateemail.com'
EMAIL_HOST_USER = 'hello@afriwallstreet.com'
EMAIL_HOST_PASSWORD = 'AFRIhello19'
#EMAIL_PORT = 587
DEFAULT_FROM_EMAIL = 'hello@afriwallstreet.com'

PASSWORD_RESET_TIMEOUT = 900