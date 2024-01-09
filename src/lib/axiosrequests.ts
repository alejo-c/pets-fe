import axios, { AxiosRequestConfig } from 'axios'
import URL from '../constants/api.constants'

axios.defaults.baseURL = URL

const apiRequest = async (options: AxiosRequestConfig<any> = {}) => {
    const controller = new AbortController()
    const instance = await axios({ ...options, signal: controller.signal })

    controller.abort()
    return instance
}

export default apiRequest
