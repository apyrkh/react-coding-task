import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export class Api {
  private api: AxiosInstance

  constructor () {
    this.api = axios.create()

    this.api.interceptors.request.use(function (config) {
      // @TODO before requrest interceptor
      return config
    })

    this.api.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error: AxiosError) => {
        // @TODO for errors handling
        throw error
      })
  }

  public get<T, R = AxiosResponse<T>> (url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.api.get(url, config)
  }

  public delete<T, R = AxiosResponse<T>> (url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.api.delete(url, config)
  }

  public post<T, R = AxiosResponse<T>> (url: string, data?: any, config?: AxiosRequestConfig): Promise<R> {
    return this.api.post(url, data, config)
  }

  public put<T, R = AxiosResponse<T>> (url: string, data?: any, config?: AxiosRequestConfig): Promise<R> {
    return this.api.put(url, data, config)
  }
}
