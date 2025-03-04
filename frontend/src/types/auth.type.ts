export interface AuthState {
    user: User | null;
    isAuthenticated: boolean; 
    loading: boolean;
    error: string | null;
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




  export type LoginCredentials = {
    username: string;   
    password: string;
  }
   
  export type RegisterCredentials = {
    username: string;
    password: string;
    email: string;
  }
