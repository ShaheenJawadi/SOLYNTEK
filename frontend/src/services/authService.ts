import { apiService } from '../api/axios';
import { setToken } from '../utils/token';
 
export const login = async (email: string, password: string) => {
  const response = await apiService.post<{ token: string }>('/auth/login', { email, password });
  setToken( response.token); 
  return response.token;
};
