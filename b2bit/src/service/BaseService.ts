import { AxiosError, AxiosResponse } from 'axios';
import Api from './Api';

Api.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => {
      console.log('Response Interceptor', response);
      return response;
    },
    (error: AxiosError): Promise<AxiosError> => {
      if (error.response) {
        console.error('Response Error Data', error.response.data);
        console.error('Response Error Status', error.response.status);
      } else if (error.request) {
        console.error('No Response', error.request);
      } else {
        console.error('Request Error', error.message);
      }
      return Promise.reject(error);
    }
  );

  Api.interceptors.request.use(
    config => {
      const token = localStorage.getItem('userToken')
        config.headers.Accept = 'application/json;version=v1_web';
        config.headers['Content-Type'] = 'application/json'
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        
      }
      console.log('Request Interceptor', config);
      return config;
    },
    (error => {
      console.error('Request Error', error);
      return Promise.reject(error);
    }
  ));