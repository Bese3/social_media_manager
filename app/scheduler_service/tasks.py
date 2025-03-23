import tweepy
from .. import Config
from ..celery_config import app_celery as celery
from ..models import db, Post

TWITTER_API_KEY = Config.TWITTER_API_KEY
TWITTER_API_SECRET = Config.TWITTER_API_SECRET
TWITTER_ACCESS_TOKEN = Config.TWITTER_ACCESS_TOKEN
TWITTER_ACCESS_TOKEN_SECRET = Config.TWITTER_ACCESS_TOKEN_SECRET

@celery.task
def post_to_platform(post_id):
    post = Post.query.get(post_id)
    if not post or post.status != "scheduled":
        return
    
    try:
        if post.platform == "twitter":

            client = tweepy.Client(consumer_key=Config.TWITTER_API_KEY,
                                    consumer_secret=Config.TWITTER_API_SECRET,
                                    access_token=Config.TWITTER_ACCESS_TOKEN,
                                    access_token_secret=Config.TWITTER_ACCESS_TOKEN_SECRET)
            response = client.create_tweet(text=post.content)
            print(f"Tweet posted: {response.data['id']}")
            # except tweepy.TweepyException as e:
                # print(f"Error posting tweet: {e}")
            

        # Instagram, Facebook, LinkedIn posting
        
        post.status = "posted"
    except Exception as e:
        post.status = "failed"
        print(f"Error posting to {post.platform}: {e}")
    
    db.session.commit()