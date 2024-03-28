import styles from './homePage.module.css'
import { Header } from '../Header'
import { Sidebar } from '../Sidebar'
import { ProductList } from '../ProductList'
import {useGetCategories} from '../../api/useGetCategories'
import {useGetProducts} from '../../api/useGetProducts'

    
export const HomePage = () => {    
    const { data: categoriesData = [] } = useGetCategories() 
    console.log('categories', categoriesData)
    const { data: productListData = [] } = useGetProducts(categoriesData?.data?.current_category?.id) 
    console.log('products', productListData)


    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>
                <Sidebar data={categoriesData?.data?.categories}/>
                <ProductList data={productListData?.data?.category_results} />
            </div>
        </div>
    )
} 




