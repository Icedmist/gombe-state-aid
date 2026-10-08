from pydantic import BaseModel, EmailStr

class LoginIn(BaseModel):
    email: EmailStr
    password: str

class TokenOut(BaseModel):
    access_token: str
    token_type: str = "bearer"

class UserOut(BaseModel):
    id: str
    name: str | None = None
    email: str
    role: str
    class Config:
        from_attributes = True

class UserCreate(BaseModel):
    name: str | None = None
    email: EmailStr
    password: str
    role: str = "USER"
