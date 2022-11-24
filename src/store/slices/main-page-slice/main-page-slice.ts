import { createSlice } from '@reduxjs/toolkit';

import { NameSpace } from 'src/store/constants';
import { MainPageSliceInitialState } from 'src/store/slices/main-page-slice/types';

const initialState: MainPageSliceInitialState = {
  title: 'Hello',
};

export const mainPageSlice = createSlice({
  name: NameSpace.MainPage,
  initialState,
  reducers: {
    clearState(state) {
      state.title = 'State is cleared';
    },
  },
});

export const { clearState } = mainPageSlice.actions;
