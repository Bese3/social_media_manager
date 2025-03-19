from flask import Blueprint, jsonify
from ..models import Post
from .reports import generate_analytics_report

analytics_bp = Blueprint("analytics", __name__)

@analytics_bp.route("/report", methods=["GET"])
def get_analytics():
    report = generate_analytics_report()
    posts = Post.query.all()
    
    metrics = {post.id: post.engagement_metrics for post in posts}
    return jsonify({"ga_report": str(report), "post_metrics": metrics})