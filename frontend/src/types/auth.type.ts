export interface AuthState {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean; 
  }
  

  export interface User {
    id: string;
    email: string;
    username: string;
    role: UserRole;
  }

  export enum UserRole {
    USER = 'user',
    ADMIN = 'admin',
  }