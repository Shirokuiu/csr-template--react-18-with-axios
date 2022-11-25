import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  // Тут для всех эндпоинтов где будет реализована функция injectEndpoints
  // пропишется baseUrl
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: () => ({}),
});
