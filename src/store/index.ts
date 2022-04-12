import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from 'src/store/root-reducer';
import { createAPI } from 'src/services/api';

export const api = createAPI();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
