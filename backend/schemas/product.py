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


class ProductCreate(ProductBase):
    pass


class ProductUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    price: Optional[float] = Field(None, gt=0)
    category: Optional[str] = None


class ProductSearchParams(BaseModel):
    search: Optional[str] = None
    category: Optional[str] = None
    sort_by: Optional[str] = "name"
    sort_order: Optional[str] = "asc"
    page: int = 1
    page_size: int = 10
