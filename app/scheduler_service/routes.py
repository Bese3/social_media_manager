from flask import Blueprint, request, jsonify
from ..models import db, Post
from .tasks import post_to_platform
from datetime import datetime

scheduler_bp = Blueprint("scheduler", __name__)

@scheduler_bp.route("/schedule", methods=["POST"])
def schedule_post():
    data = request.get_json()
    platform = data.get("platform")
    content = data.get("content")
    scheduled_time = datetime.strptime(data.get("scheduled_time"), "%Y-%m-%d %H:%M:%S")
    
    post = Post(platform=platform, content=content, scheduled_time=scheduled_time)
    db.session.add(post)
    db.session.commit()
    
    # Schedule the task
    post_to_platform.apply_async(args=[post.id], eta=scheduled_time)
    
    return jsonify({"message": "Post scheduled", "post_id": post.id})