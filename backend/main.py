from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import Base, engine

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="SolynTek"
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Hello World!  This is Shaheen "}



if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)