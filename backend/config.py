from pydantic_settings import BaseSettings
from typing import Optional
import secrets


class Settings(BaseSettings):

    DATABASE_URL: str = "sqlite:///./solyntek.db"
settings = Settings()
