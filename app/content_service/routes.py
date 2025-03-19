from flask import Blueprint, request, jsonify
from .ai_generator import generator

content_bp = Blueprint("content", __name__)

@content_bp.route("/generate", methods=["POST"])
def generate_content():
    data = request.get_json()
    topic = data.get("topic", None)
    if not topic:
        return jsonify({"error": "Topic is required"}), 400
    
    caption = generator.generate_caption(topic)
    hashtags = generator.generate_hashtags(topic)
    
    return jsonify({
        "caption": caption,
        "hashtags": hashtags,
        "description": f"{caption} {' '.join(hashtags)}"
    })