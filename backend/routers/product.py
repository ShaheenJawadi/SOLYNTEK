from fastapi import APIRouter, Depends, status, Query
from typing import Dict, Optional, Any
from sqlalchemy.orm import Session

from models.user import User
from services import product as productService
from database import get_db
from schemas.product import Product, ProductCreate, ProductUpdate, ProductSearchParams
from utilities import auth

router = APIRouter(
    prefix="/products",
    tags=["products"]
)


@router.get("/", response_model=Dict[str, Any])
async def list_products(
        search: Optional[str] = None,
        category: Optional[str] = None,
        sort_by: Optional[str] = "name",
        sort_order: Optional[str] = "asc",
        page: int = Query(1, ge=1),
        page_size: int = Query(10, ge=1, le=100),
        db: Session = Depends(get_db),
):
    #   products with search, filter, sort and pagination.
    params = ProductSearchParams(
        search=search,
        category=category,
        sort_by=sort_by,
        sort_order=sort_order,
        page=page,
        page_size=page_size
    )

    # products and total count
    products, total = productService.search_products(
        db=db,
        params=params
    )

    # pagination info
    total_pages = (total + page_size - 1) // page_size
    print(products)

    return {
        "items": products,
        "total": total,
        "page": page,
        "page_size": page_size,
        "total_pages": total_pages
    }


@router.get("/{product_id}", response_model=Product)
async def get_product(
        product_id: int,
        db: Session = Depends(get_db),
):
    return productService.get_product(
        db=db,
        product_id=product_id,
    )


@router.post("/", response_model=Product,
             status_code=status.HTTP_201_CREATED)
async def create_product(
        product: ProductCreate,
        db: Session = Depends(get_db),
        current_user: User = Depends(auth.get_current_user)
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
        current_user: User = Depends(auth.get_current_user)
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
        current_user: User = Depends(auth.get_current_user)
):
    return productService.delete_product(db=db, product_id=product_id)
