import axios from 'axios';
import globalExceptionHandler from './globalExceptionHandler';

class AxiosInterceptor {
  private static reqInterceptor: number;
  private static resInterceptor: number;

  // declare a request interceptor
  static subscribeRequest() {
    if (this.reqInterceptor === undefined) {
      this.reqInterceptor = axios.interceptors.request.use(
        (config: any) => {
          // perform a task before the request is sent
          return config;
        },
        (error: any) => {
          // handle error
          return Promise.reject(error);
        },
      );
    }
  }

  // declare a response interceptor
  static subscribeResponse() {
    if (this.resInterceptor === undefined) {
      this.resInterceptor = axios.interceptors.response.use(
        (response: any) => {
          // do something with the response data
          return response;
        },
        (error: any) => {
          // handle the response error 
          globalExceptionHandler(error.response);
          return Promise.reject(error);
        },
      );
    }
  }
}

export default AxiosInterceptor;