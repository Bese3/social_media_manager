from transformers import pipeline

class ContentGenerator:
    def __init__(self):
        self.generator = pipeline("text-generation", model="distilgpt2")
    
    def generate_caption(self, topic, max_length=50):
        prompt = f"Write a social media caption about {topic}:"
        result = self.generator(prompt, max_length=max_length, num_return_sequences=1)
        return result[0]["generated_text"].replace(prompt, "").strip()
    
    def generate_hashtags(self, topic):
        # Simple heuristic-based hashtag generation
        words = topic.lower().split()
        return [f"#{word}" for word in words[:3]]

generator = ContentGenerator()