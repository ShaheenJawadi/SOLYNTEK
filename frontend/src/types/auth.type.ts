export interface AuthState {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean; 
  }
  

  export interface User {
    id: string;
    username: string;
    email: string;
    role: UserRole;
  }

  export enum UserRole {
    USER = 'user',
    ADMIN = 'admin',
  }