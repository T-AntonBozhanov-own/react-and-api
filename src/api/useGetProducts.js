import { useQuery } from "@tanstack/react-query" 
import {fetcher} from './fetcher'

export const useGetProducts = (categoryId) => {
    const { isPending, isError, data } = useQuery({
        queryKey: [`products_by_category_${categoryId}`], 
        queryFn: async () => await fetcher('get', 'https://api.rainforestapi.com/request', {
                type: "category",
                category_id: categoryId,
                amazon_domain: "amazon.com",
            }),
        enable: Boolean(categoryId)
    }) 

    return { isPending, isError, data: categoryId ? data : [] }
}