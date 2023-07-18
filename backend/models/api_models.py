from pydantic import BaseModel

class CommonResponseClass(BaseModel):
    status: int
    data: str