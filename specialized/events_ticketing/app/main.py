from fastapi import FastAPI

app = FastAPI()

@app.get('/')
def read_root():
    return {'service': 'events_ticketing microservice running'}
