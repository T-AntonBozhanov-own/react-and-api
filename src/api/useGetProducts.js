import { useQuery } from "@tanstack/react-query" 
import {fetcher} from './fetcher'

export const useGetProducts = (categoryId, sort_by) => {
    const { isPending, isError, data } = useQuery({
        queryKey: [`products_by_category_${categoryId}`], 
        queryFn: async () => await fetcher('get', 'https://api.rainforestapi.com/request', {
                type: "category",
                category_id: categoryId,
                amazon_domain: "amazon.com",
                sort_by
            }),
        enable: Boolean(categoryId)
    }) 

    return { isPending, isError, data: categoryId ? data : [] }
}