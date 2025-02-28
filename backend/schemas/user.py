from pydantic import BaseModel, EmailStr, Field


class UserBase(BaseModel):
    email: EmailStr
    username: str


class UserLogin(BaseModel):
    username: str
    password: str


class UserCreate(UserBase):
    password: str = Field(..., min_length=8)


class User(UserBase):
    id: int

    class Config:
        orm_mode = True
