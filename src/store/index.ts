import { configureStore } from '@reduxjs/toolkit';

import { api } from 'src/services/api';
import { errorInterceptor } from 'src/services/error-interceptor';
import { rootReducer } from 'src/store/root-reducer';

export const store = configureStore({
  reducer: rootReducer,
  // Сюда будут склеиваться все сервисы по работе с api
  // в том числе и интерцептор ошибок
  middleware: (gDM) => gDM().concat(api.middleware, errorInterceptor),
});
