import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type ValidMenu = 'Chat' | 'Game' | 'Leaderboard';

export interface NavState {
  activeMenu: ValidMenu;
}

const initialState: NavState = {
  activeMenu: 'Game',
};

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setActiveMenu: (state, action: PayloadAction<ValidMenu>) => {
      state.activeMenu = action.payload;
    },
  },
});

export const { setActiveMenu } = navSlice.actions;

export default navSlice.reducer;
