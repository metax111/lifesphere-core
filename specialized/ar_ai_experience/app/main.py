from fastapi import FastAPI

app = FastAPI()

@app.get('/')
def read_root():
    return {'service': 'ar_ai_experience microservice running'}
