from flask import Flask
from flask_cors import CORS
from .config import Config
from .models import db

def create_app():
    app = Flask(__name__)
    CORS(app, resources={r"/*": {"origins": "*"}})
    app.config.from_object(Config)
    
    # Initialize extensions
    db.init_app(app)
    
    # Register blueprints
    from .content_service.routes import content_bp
    from .scheduler_service.routes import scheduler_bp
    from .engagement_service.routes import engagement_bp
    from .analytics_service.routes import analytics_bp
    
    app.register_blueprint(content_bp, url_prefix="/content")
    app.register_blueprint(scheduler_bp, url_prefix="/scheduler")
    app.register_blueprint(engagement_bp, url_prefix="/engagement")
    app.register_blueprint(analytics_bp, url_prefix="/analytics")
    
    with app.app_context():
        db.create_all()
    
    return app

app = create_app()
