from pyngrok import ngrok
from django.core.management.commands.runserver import Command as RunserverCommand
from django.core.management import execute_from_command_line
import os

# Ustaw swój authtoken z ngrok
ngrok.set_auth_token("2tSQ1MPDs75zHYKJjnC1V0UgFZY_3DW6QnQywRpebPDKCdi3V")

# Uruchom tunel ngrok
public_url = ngrok.connect(8000)
print(f"\nPublic URL: {public_url}\n")

# Uruchom serwer Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Moments.settings')
execute_from_command_line(['manage.py', 'runserver'])