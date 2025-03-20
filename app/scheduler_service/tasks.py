import tweepy
from .. import Config
from ..celery_config import app_celery as celery
from ..models import db, Post

@celery.task
def post_to_platform(post_id):
    post = Post.query.get(post_id)
    if not post or post.status != "scheduled":
        return
    
    try:
        if post.platform == "twitter":
            print(Config.TWITTER_ACCESS_TOKEN)
            client = tweepy.Client(consumer_key=Config.TWITTER_API_KEY,
                                   consumer_secret=Config.TWITTER_API_SECRET,
                                   access_token=Config.TWITTER_ACCESS_TOKEN,
                                   access_token_secret=Config.TWITTER_ACCESS_TOKEN_SECRET)
            response = client.create_tweet(text=post.content)
            # auth = tweepy.OAuthHandler(Config.TWITTER_API_KEY, Config.TWITTER_API_SECRET)
            # auth.set_access_token(Config.TWITTER_ACCESS_TOKEN, Config.TWITTER_ACCESS_TOKEN_SECRET)
            # api = tweepy.API(auth)
            # api.update_status(post.content)
            print(f"response {response}")
        
        # Instagram, Facebook, LinkedIn posting
        
        post.status = "posted"
    except Exception as e:
        post.status = "failed"
        print(f"Error posting to {post.platform}: {e}")
    
    db.session.commit()