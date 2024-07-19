import axios, { AxiosRequestConfig } from 'axios'

const baseURL = process.env.REACT_APP_BASE_API || ''

const defaultOptions: AxiosRequestConfig = {
  baseURL: 'http://localhost:5001/api',
  headers: {
    'Content-Type': 'application/json',
  },
}

const instance = axios.create(defaultOptions)

export default instance
