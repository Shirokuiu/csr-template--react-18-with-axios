import { isRejectedWithValue } from '@reduxjs/toolkit';
import type { Middleware } from '@reduxjs/toolkit';

export const errorInterceptor: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    // Сюда будут прилетать все ошибки с сервера
    // Аналогия интерцептора ошибок от axios
    // Чтобы вытащить кастомную ошибку с сервера (action.error?.data.message) - https://async-transformresponse--rtk-query-docs.netlify.app/concepts/error-handling/
    // data может и не прилететь, если сервер не выбрасывает кастомную ошибку

    // eslint-disable-next-line no-console
    console.error('Ошибка сервера', JSON.stringify(action.error));
  }

  return next(action);
};
