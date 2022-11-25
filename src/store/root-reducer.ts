import { combineReducers } from '@reduxjs/toolkit';

import { SliceNameSpace } from 'src/store/constants';
import { mainPageSlice } from 'src/store/slices/main-page-slice/main-page-slice';

export const rootReducer = combineReducers({
  [SliceNameSpace.MainPage]: mainPageSlice.reducer,
});
