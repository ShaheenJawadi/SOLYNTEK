import { apiService } from '../api/axios';
import { RegisterCredentials,LoginCredentials, User } from '../types/auth.type';
 
export const login = async (data: LoginCredentials) => {
  const response = await apiService.post<{ access_token: string,user:User }>('/auth/login', data);
  return response;
};
export const register = async (data: RegisterCredentials) => {
  const response = await apiService.post('/auth/register', data);
  return response;
};
