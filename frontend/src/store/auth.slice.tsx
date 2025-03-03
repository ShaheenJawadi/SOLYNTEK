import { createSlice} from '@reduxjs/toolkit';
import { AuthState} from '../types/auth.type';
 

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    token: null
};

 
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.isAuthenticated = false;
      state.user = null; 
      state.token = null;
    }
  } 
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;