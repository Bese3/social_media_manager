from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    platform = db.Column(db.String(50), nullable=False)  # e.g., "twitter", "instagram"
    content = db.Column(db.Text, nullable=False)
    hashtags = db.Column(db.String(200))
    scheduled_time = db.Column(db.DateTime, nullable=False)
    status = db.Column(db.String(20), default="scheduled")  # scheduled, posted, failed
    engagement_metrics = db.Column(db.JSON)  # likes, comments, shares

class Engagement(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    post_id = db.Column(db.Integer, db.ForeignKey("post.id"))
    comment = db.Column(db.Text, nullable=False)
    response = db.Column(db.Text)
    sentiment = db.Column(db.String(20))  # positive, negative, neutral