import styles from './homePage.module.css'
import { Header } from '../Header'
import { Sidebar } from '../Sidebar'
import { ProductList } from '../ProductList'
import {useGetCategories} from '../../api/useGetCategories'
import {useGetProducts} from '../../api/useGetProducts'
import { useState } from 'react'
import { SORT_PARAMS } from '../../constants'

    
export const HomePage = () => {    
    const [category, setCategory] = useState()
    const [sortParam, setSortParam] = useState(SORT_PARAMS.FEATURED)

    const { data: categoriesData = [] } = useGetCategories() 
    console.log('categories', categoriesData)
    const { data: productListData = [] } = useGetProducts(categoriesData?.data?.current_category?.id, sortParam) 
    console.log('products', productListData)

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>
                <Sidebar 
                    data={categoriesData?.data?.categories} 
                    setCategory={setCategory} 
                    activeCategory={category}
                    activeSort={sortParam}
                    setSort={setSortParam}
                />
                <ProductList data={productListData?.data?.category_results} />
            </div>
        </div>
    )
} 




