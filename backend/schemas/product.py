from pydantic import BaseModel, Field
from typing import Optional


class ProductBase(BaseModel):
    name: str
    description: Optional[str] = None
    price: float = Field(..., gt=0)
    category: str

    class Config:
        orm_mode = True
        from_attributes = True


class Product(ProductBase):
    id: int
