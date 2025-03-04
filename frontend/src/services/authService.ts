import { apiService } from '../api/axios';
import { setToken } from '../utils/token';
 
export const login = async (username: string, password: string) => {
  const response = await apiService.post<{ access_token: string }>('/auth/login', { username, password });
  setToken( response.access_token); 
  return response.access_token;
};
