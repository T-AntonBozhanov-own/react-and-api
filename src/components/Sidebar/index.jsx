import style from './sidebar.module.css'

export const Sidebar = ({data = []}) => {
    return (
        <aside className={style.container}>
            <div className={style.filter_option}>
                <span className={style.title}>Categories</span>
                {
                    data?.map(cat => 
                        <span key={cat?.id}>{cat?.name}</span>
                    )
                }
            </div>
            
        </aside>
    )
}