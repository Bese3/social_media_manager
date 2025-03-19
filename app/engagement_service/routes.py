from flask import Blueprint, request, jsonify
from ..models import db, Engagement, Post
from .sentiment import analyzer

engagement_bp = Blueprint("engagement", __name__)

@engagement_bp.route("/respond", methods=["POST"])
def respond_to_comment():
    data = request.get_json()
    post_id = data.get("post_id")
    comment = data.get("comment")
    
    sentiment = analyzer.analyze(comment)
    response = "Thanks for your feedback!" if sentiment == "positive" else "We’ll look into this."
    
    engagement = Engagement(post_id=post_id, comment=comment, response=response, sentiment=sentiment)
    db.session.add(engagement)
    db.session.commit()
    
    return jsonify({"response": response, "sentiment": sentiment})