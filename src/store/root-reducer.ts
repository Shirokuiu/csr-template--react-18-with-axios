import { combineReducers } from '@reduxjs/toolkit';

import { NameSpace } from 'src/store/constants';
import { mainPageProcess } from 'src/store/main-page-process/reducer/main-page-process';

export const rootReducer = combineReducers({
  [NameSpace.MainPage]: mainPageProcess.reducer,
});
