from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="Cognitive Service MVP")

# Sample input model
class TextRequest(BaseModel):
    text: str

# Health check endpoint
@app.get("/health")
def health_check():
    return {"status": "ok"}

# Sample NLP endpoint
@app.post("/analyze")
def analyze_text(request: TextRequest):
    word_count = len(request.text.split())
    return {"text": request.text, "word_count": word_count}
