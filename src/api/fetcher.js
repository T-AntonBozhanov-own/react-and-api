import axios from 'axios'

export const fetcher = async (method, url, params, ...options) => {
    return await axios({method, url, params: {
            api_key: import.meta.env.VITE_API_KEY,
            ...params
    }, ...options})
}