from fastapi import FastAPI

app = FastAPI()

@app.get('/')
def read_root():
    return {'service': 'video_streaming microservice running'}
