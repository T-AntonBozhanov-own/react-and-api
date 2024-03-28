import { ProductItem } from '../ProductItem'
import { Spinner } from '../Spinner'
import styles from './productList.module.css'

export const ProductList = ({data = []}) => {
    return (
        <div className={styles.container}>
            {data.length ? data.map(product => <ProductItem {...product} />) : <Spinner />}
        </div>
    )
}