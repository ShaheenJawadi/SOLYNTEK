from sqlalchemy.orm import Session
from ..models.user import User
from ..schemas.user import UserCreate

def create_user(db: Session, user: UserCreate):

    crated_user = User(
        email=user.email,
        username=user.username,
        hashed_password=user.password
    )

    db.add(crated_user)
    db.commit()
    db.refresh(crated_user)

    return crated_user