from fastapi import HTTPException, status
from sqlalchemy.orm import Session
from utilities import auth
from models.user import User
from schemas.user import UserCreate


def create_user(db: Session, user: UserCreate):
    # Check if email exists
    crated_user = get_user_by_email(db, email=user.email)
    if crated_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered"
        )

    # Check if username exists
    crated_user = get_user_by_username(db, username=user.username)
    if crated_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Username already taken"
        )

    # Create new user
    hashed_password = auth.get_password_hash(user.password)
    crated_user = User(
        email=user.email,
        username=user.username,
        password=hashed_password
    )

    db.add(crated_user)
    db.commit()
    db.refresh(crated_user)

    return crated_user


def get_user(db: Session, user_id: int):
    return db.query(User).filter(User.id == user_id).first()


def get_user_by_email(db: Session, email: str):
    return db.query(User).filter(User.email == email).first()


def get_user_by_username(db: Session, username: str):
    return db.query(User).filter(User.username == username).first()
