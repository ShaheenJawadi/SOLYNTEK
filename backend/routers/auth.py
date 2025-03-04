from datetime import timedelta
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from fastapi.security import OAuth2PasswordRequestForm
from database import get_db
from schemas import user

from services import user as userService
from utilities import auth

router = APIRouter(
    prefix="/auth",
    tags=["authentication"]
)


@router.post("/register", response_model=user.User)
def register(user: user.UserCreate, db: Session = Depends(get_db)):
    return userService.create_user(db=db, user=user)


@router.post("/login", response_model=user.Token)
def login(
        form_data: user.UserLogin,
        db: Session = Depends(get_db)
):
    user = auth.authenticate_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )

    print(user.role)
    access_token = auth.create_access_token(data={"sub": user.username, "role": user.role})

    return {"access_token": access_token, "token_type": "bearer"}