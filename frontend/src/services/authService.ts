import { apiService } from '../api/axios';
import { registerPayload } from '../types/auth.type';
import { setToken } from '../utils/token';
 
export const login = async (username: string, password: string) => {
  const response = await apiService.post<{ access_token: string }>('/auth/login', { username, password });
  setToken( response.access_token); 
  return response.access_token;
};
export const register = async (data: registerPayload) => {
  const response = await apiService.post('/auth/register', data);
  return response;
};
