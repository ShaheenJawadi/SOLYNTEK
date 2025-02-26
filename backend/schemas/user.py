from pydantic import BaseModel, EmailStr


class UserBase(BaseModel):
    email: EmailStr
    username: str


class UserLogin(BaseModel):
    username: str
    password: str


class User(UserBase):
    id: int

    class Config:
        orm_mode = True
