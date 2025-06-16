from typing import Union

from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return "This thing works, nice"

@app.get("/uploaded/{filename}")
def read_upload(filename: str):
    return {"filename": filename}