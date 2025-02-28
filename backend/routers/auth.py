from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database import get_db
from schemas.user import User, UserCreate
from ..services import user as userService
router = APIRouter(
    prefix="/auth",
    tags=["authentication"]
)


@router.post("/register", response_model=User)
def register(user: UserCreate, db: Session = Depends(get_db)):
    return userService.create_user(db=db, user=user)


@router.post("/login")
def login():
    return {'message': 'login'}
