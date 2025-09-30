from fastapi import FastAPI

app = FastAPI()

@app.get('/')
def read_root():
    return {'service': 'viral_engagement microservice running'}
