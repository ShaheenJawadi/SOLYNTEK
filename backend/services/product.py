from sqlalchemy.orm import Session
from fastapi import HTTPException, status
from models.product import Product
from schemas.product import ProductCreate, ProductUpdate


def get_product(db: Session, product_id: int):
    query = db.query(Product).filter(Product.id == product_id)

    product = query.first()
    if not product:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Product not found"
        )
    return product


def create_product(db: Session, product: ProductCreate):
    db_product = Product(
        **product.dict()
    )

    db.add(db_product)
    db.commit()
    db.refresh(db_product)

    return db_product


def update_product(db: Session, product_id: int, product: ProductUpdate):
    db_product = get_product(db, product_id)
    # Update only prov fields
    update_data = product.dict(exclude_unset=True)
    for key, value in update_data.items():
        setattr(db_product, key, value)

    db.add(db_product)
    db.commit()
    db.refresh(db_product)

    return db_product


def delete_product(db: Session, product_id: int):
    db_product = get_product(db, product_id)
    db.delete(db_product)
    db.commit()

    return {"success": True}
