from app import create_app
from app.celery_config import app_celery as celery

app = create_app()
app.app_context().push()