import style from './productItem.module.css'

export const ProductItem = ({image, link, price, rating, title}) => {
    return (
        <div className={style.container}>
            <img src={image} height={150} alt='product image'/>

            <div className={style.content}>
                <span className={style.title}>{title}</span>
                <div className={style.price}>
                    <span>{`Price: ${price?.raw}`}</span>
                </div>
                <div className={style.rating}>
                    <span>{`Rating ${rating} out of 5`}</span>
                    <a href={link}>Browse on amazon.com</a>
                </div>
            </div>            
        </div>
    )
}