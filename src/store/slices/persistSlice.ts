import { ILogin } from '@/types/authTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  authData: ILogin | null;
  goalsEditData: IGoalEditData | null;
}
interface IGoalEditData {
  month: string;
  createdAt: string;
  id: string;
}

const initialState: IInitialState = {
  authData: null,
  goalsEditData: null,
};

export const persistSlice = createSlice({
  name: 'persistSlice',
  initialState,
  reducers: {
    setAuthToken: (state, { payload }: PayloadAction<ILogin>) => {
      state.authData = payload;
    },
    logOut: (state) => {
      state.authData = null;
    },
    setEditData: (state, { payload }: PayloadAction<IGoalEditData>) => {
      state.goalsEditData = payload;
    },
    clearData: (state) => {
      state.goalsEditData = null;
    },
  },
});

export const persistSliceActions = persistSlice.actions;
export const persistSliceReducer = persistSlice.reducer;
