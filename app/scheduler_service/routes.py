from flask import Blueprint, request, jsonify
from ..models import db, Post
from datetime import datetime

scheduler_bp = Blueprint("scheduler", __name__)

@scheduler_bp.route("/schedule", methods=["POST"])
def schedule_post():
    from .tasks import post_to_platform
    data = request.get_json()
    platform = data.get("platform")
    content = data.get("content")
    scheduled_time = datetime.strptime(data.get("scheduled_time"), "%Y-%m-%d %H:%M:%S")
    print(scheduled_time)
    
    post = Post(platform=platform, content=content, scheduled_time=scheduled_time)
    db.session.add(post)
    db.session.commit()
    
    # Schedule the task
    post_to_platform.apply_async(args=[post.id], eta=scheduled_time)
    # post_to_platform(post.id)
    
    return jsonify({"message": "Post scheduled", "post_id": post.id})