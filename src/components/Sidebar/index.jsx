import { SORT_PARAMS, SORT_PARAMS_TITLE } from '../../constants'
import style from './sidebar.module.css'

export const Sidebar = ({data = [], setCategory, activeCategory, setSort, activeSort}) => {
    return (
        <aside className={style.container}>
            <div className={style.filter_option}>
                <span className={style.title}>Categories</span>
                {
                    data?.map(cat => 
                        <span key={cat?.id} 
                        className={activeCategory === cat?.id ? style.category__active : style.category} 
                        onClick={() => setCategory(cat?.id)}>
                            {cat?.name}
                        </span>
                    )
                }
            </div>
            <div className={style.filter_option}>
                <span className={style.title}>Sort By</span>
                {Object.keys(SORT_PARAMS_TITLE).map(key => (
                     <span 
                        className={activeSort === SORT_PARAMS[key] ? style.category__active : style.category} 
                        onClick={() => setSort(SORT_PARAMS[key])}>
                         {SORT_PARAMS_TITLE[key]}
                     </span>
                ))}
            </div>
        </aside>
    )
}