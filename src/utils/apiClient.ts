import axios, { AxiosRequestConfig } from 'axios'

const baseURL = process.env.REACT_APP_BASE_API || '"http://localhost:5001/api"'

const defaultOptions: AxiosRequestConfig = {
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
}

const instance = axios.create(defaultOptions)

export default instance
