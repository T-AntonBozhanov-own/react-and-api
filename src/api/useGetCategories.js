import { useQuery } from "@tanstack/react-query" 
import {fetcher} from './fetcher'

export const useGetCategories = (categoryId) => {
    const { isPending, isError, data } = useQuery({queryKey: ['categories'], queryFn: async () => 
    await fetcher('get', 'https://api.rainforestapi.com/categories', {
          domain: "amazon.com",
          type: "standard",
          parent_id: "2811119011"
        }) 
    }) 

    return { isPending, isError, data }
}