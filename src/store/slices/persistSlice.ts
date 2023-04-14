import { ILogin } from '@/types/authTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  authData: ILogin | null;
}

const initialState: IInitialState = {
  authData: null,
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
  },
});

export const persistSliceActions = persistSlice.actions;
export const persistSliceReducer = persistSlice.reducer;
