import { createSlice } from '@reduxjs/toolkit';

export interface User {
  id: string;
  username: string;
  password: string;
  email: string | null;
  pointCurrent: number;
  pointReceived: number;
  createdAt: string;
  updatedAt: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // setToken: (state, action: PayloadAction<string>) => {
    //   state.token += action.payload;
    // },
  },
});

// export const {} = authSlice.actions;

export default authSlice.reducer;
