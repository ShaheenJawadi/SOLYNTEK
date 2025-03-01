from sqlalchemy.orm import Session
from fastapi import HTTPException, status
from models.product import Product
from schemas.product import ProductCreate, ProductUpdate, ProductSearchParams, ProductBase
from sqlalchemy import or_


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


def search_products(
        db: Session,
        params: ProductSearchParams,
):
    query = db.query(Product)

    if params.search:
        search_term = f"%{params.search}%"
        query = query.filter(
            or_(
                Product.name.ilike(search_term),
                Product.description.ilike(search_term)
            )
        )

    # category
    if params.category:
        query = query.filter(Product.category == params.category)

    #  sorting
    if params.sort_by:
        # Get the column to sort by
        column = getattr(Product, params.sort_by, Product.name)

        # Apply sort order
        if params.sort_order.lower() == "desc":
            column = column.desc()

        query = query.order_by(column)

    # pagination
    total = query.count()
    query = query.offset((params.page - 1) * params.page_size).limit(params.page_size)
    products = [ProductBase.from_orm(product) for product in query.all()]

    return products, total
