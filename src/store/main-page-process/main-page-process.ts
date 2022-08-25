import { createSlice } from '@reduxjs/toolkit';

import { NameSpace } from 'src/store/constants';
import { ActionType } from 'src/store/main-page-process/action-type';
import { InitialState } from 'src/store/types/main-page-process';

const initialState: InitialState = {
  title: 'Hello',
};

export const mainPageProcess = createSlice({
  name: NameSpace.MainPage,
  initialState,
  reducers: {
    [ActionType.ClearState](state) {
      state.title = 'State is cleared';
    },
  },
});

export const { clearState } = mainPageProcess.actions;
