import { combineReducers } from '@reduxjs/toolkit';

import { NameSpace } from 'src/store/constants';
import { mainPageSlice } from 'src/store/slices/main-page-slice/main-page-slice';

export const rootReducer = combineReducers({
  [NameSpace.MainPage]: mainPageSlice.reducer,
});
