from pydantic_settings import BaseSettings
import secrets


class Settings(BaseSettings):
    DATABASE_URL: str = "sqlite:///./solyntek.db"
    SECRET_KEY: str = secrets.token_urlsafe(32)


settings = Settings()
