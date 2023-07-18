import uvicorn
from fastapi import FastAPI
from models.api_models import CommonResponseClass
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.get("/")
async def health_api():
	return CommonResponseClass(status=200, data="Server Is Healthy")

if __name__ == "__main__":
	print("Server is Running")
	uvicorn.run("app:app", reload=True)