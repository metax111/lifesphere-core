from fastapi import FastAPI

app = FastAPI()

@app.get('/')
def read_root():
    return {'service': 'travel_location microservice running'}
