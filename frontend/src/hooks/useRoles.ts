import { useSelector } from 'react-redux';
import type { RootState } from '../store';
export const useRoles = () => {
  const {user} = useSelector((state: RootState) => state.auth);

  const isAdmin = () => {
    return  user?.role === 'admin';
  };

  const isUser = () => {
    return  user?.role === 'user';
  };


  return {
    isAdmin,
    isUser
  };
};