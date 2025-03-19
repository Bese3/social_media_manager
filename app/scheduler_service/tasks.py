import tweepy
from .. import celery, Config
from ..models import db, Post

@celery.task
def post_to_platform(post_id):
    post = Post.query.get(post_id)
    if not post or post.status != "scheduled":
        return
    
    try:
        if post.platform == "twitter":
            auth = tweepy.OAuthHandler(Config.TWITTER_API_KEY, Config.TWITTER_API_SECRET)
            # Add token setup here
            api = tweepy.API(auth)
            api.update_status(post.content)
        
        # Add Instagram, Facebook, LinkedIn posting logic here
        
        post.status = "posted"
    except Exception as e:
        post.status = "failed"
        print(f"Error posting to {post.platform}: {e}")
    
    db.session.commit()