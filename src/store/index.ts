import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from 'src/store/root-reducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: '',
      },
    }),
});
