import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';
import { RetryConfig } from 'retry-axios';

type RaxAxiosInstance = AxiosInstance & {
  defaults: {
    raxConfig?: RetryConfig;
  };
};

const httpClient = () => {
  const defaultOptions: AxiosRequestConfig = {
    method: 'get',
  };

  const instance: RaxAxiosInstance = axios.create(defaultOptions);

  instance.defaults.raxConfig = {
    instance,
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const interceptorId = attach(instance)

  return instance;
};

export default httpClient();
