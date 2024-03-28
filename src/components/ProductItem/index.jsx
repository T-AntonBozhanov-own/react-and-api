import style from './productItem.module.css'

export const ProductItem = ({image, link, price, rating, title}) => {
    return (
        <a link={link} className={style.container}>
            <img src={image} />
            <span>{title}</span>
            <span>{rating}</span>
            {/* <span>{price}</span> */}
        </a>
    )
}