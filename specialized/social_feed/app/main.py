from fastapi import FastAPI

app = FastAPI()

@app.get('/')
def read_root():
    return {'service': 'social_feed microservice running'}
