import axios from 'axios'

export const fetcher = async (method, url, params, ...options) => {
    return await axios({method, url, params: {
            api_key: "F4E62AEF4BA247D19686FDA343682EB5",
            ...params
    }, ...options})
}