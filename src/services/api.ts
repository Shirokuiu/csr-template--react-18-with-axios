import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { APIErrorCode, BACKEND_URL, REQUEST_TIMEOUT } from 'src/services/constants';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use((config: AxiosRequestConfig) => config);

  api.interceptors.response.use(
    (response) => response,
    (err) => {
      const {
        response: { status },
      } = err;

      switch (status) {
        case APIErrorCode.Unauthorized:
          // eslint-disable-next-line no-console
          console.error(err);
          break;
        default:
      }

      return Promise.reject(err);
    },
  );

  return api;
};
