import { createSlice } from '@reduxjs/toolkit';

const initialRanks = [];

// FIXME: delete later
for (let i = 0; i < 25; i++) {
  initialRanks.push({ username: 'JohnSmith123456', point: 2000000 });
}

export interface LeaderboardUser {
  username: string;
  point: number;
}

export interface LeaderboardState {
  leaderboardUsers: LeaderboardUser[];
}

const initialState: LeaderboardState = {
  leaderboardUsers: initialRanks,
  // leaderboardUsers: [],
};

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {},
});

export default leaderboardSlice.reducer;
