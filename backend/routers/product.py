from fastapi import APIRouter, Depends, status
from typing import Dict
from sqlalchemy.orm import Session
from services import product as productService
from database import get_db
from schemas.product import Product, ProductCreate, ProductUpdate

router = APIRouter(
    prefix="/products",
    tags=["products"],
)


@router.get("/{product_id}", response_model=Product)
async def get_product(
        product_id: int,
        db: Session = Depends(get_db),
):
    return productService.get_product(
        db=db,
        product_id=product_id,
    )


@router.post("/", response_model=Product, status_code=status.HTTP_201_CREATED)
async def create_product(
        product: ProductCreate,
        db: Session = Depends(get_db),
):
    return productService.create_product(
        db=db,
        product=product,
    )


@router.put("/{product_id}", response_model=Product)
async def update_product(
        product_id: int,
        product: ProductUpdate,
        db: Session = Depends(get_db),
):
    return productService.update_product(
        db=db,
        product_id=product_id,
        product=product,
    )


@router.delete("/{product_id}", response_model=Dict[str, bool])
async def delete_product(
        product_id: int,
        db: Session = Depends(get_db),
):
    return productService.delete_product(db=db, product_id=product_id)
