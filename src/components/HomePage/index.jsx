import styles from './homePage.module.css'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { Header } from '../Header'
import { Sidebar } from '../Sidebar'
import { ProductList } from '../ProductList'

// set up the request parameters
const params = {
    api_key: "F4E62AEF4BA247D19686FDA343682EB5",
      domain: "amazon.com",
      type: "standard",
      parent_id: "2811119011"
    }

const fetcher = () => axios.get('https://api.rainforestapi.com/categories', { params }) 
    
export const HomePage = () => {
    const { isPending, isError, data, error } = useQuery({queryKey: ['categories'], queryFn: fetcher}) 
    console.log('categories', isPending, isError, data, error)
    
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>
                <Sidebar />
                <ProductList />
            </div>
        </div>
    )
} 




