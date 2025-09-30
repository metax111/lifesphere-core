# Cognitive Service

A FastAPI microservice for NLP text analysis.

## Run locally

pip install -r requirements.txt
uvicorn app.main:app --reload --port 4007

## Docker

docker build -t cognitive-service .
docker run -p 4007:4007 cognitive-service