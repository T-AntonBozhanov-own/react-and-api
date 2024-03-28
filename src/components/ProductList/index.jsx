import { ProductItem } from '../ProductItem'
import styles from './productList.module.css'

export const ProductList = ({data = []}) => {
    return (
        <div className={styles.container}>
            {data.map(product => <ProductItem {...product} />)}
        </div>
    )
}