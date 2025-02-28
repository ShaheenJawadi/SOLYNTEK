from fastapi import APIRouter

router = APIRouter(
    prefix="/auth",
    tags=["authentication"]
)


@router.post("/register")
def register():
    return {'message': 'register'}


@router.post("/login")
def login():
    return {'message': 'login'}
