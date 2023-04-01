import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  authToken: string | null;
}

const initialState: IInitialState = {
  authToken: null,
};

export const persistSlice = createSlice({
  name: 'persistSlice',
  initialState,
  reducers: {
    setAuthToken: (state, { payload }: PayloadAction<string>) => {
      state.authToken = payload;
    },
    logOut: (state) => {
      state.authToken = null;
    },
  },
});

export const persistSliceActions = persistSlice.actions;
export const persistSliceReducer = persistSlice.reducer;
