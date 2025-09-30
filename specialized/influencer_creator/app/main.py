from fastapi import FastAPI

app = FastAPI()

@app.get('/')
def read_root():
    return {'service': 'influencer_creator microservice running'}
