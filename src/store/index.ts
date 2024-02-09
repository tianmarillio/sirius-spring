import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/authSlice';
import chatSlice from './chat/chatSlice';
import leaderboardSlice from './leaderboard/leaderboardSlice';
import navSlice from './nav/navSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    chat: chatSlice,
    leaderboard: leaderboardSlice,
    nav: navSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
