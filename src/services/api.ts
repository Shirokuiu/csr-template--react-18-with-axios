import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { APIErrorCode, BACKEND_URL, REQUEST_TIMEOUT } from 'src/services/constants';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use((config: AxiosRequestConfig) => {
    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (err) => {
      const {
        response: { status },
      } = err;

      switch (status) {
        case APIErrorCode.Unauthorized:
          console.error(err);
          break;
      }

      return Promise.reject(err);
    },
  );

  return api;
};
