import { Link } from "react-router-dom";
import styles from '../Styles/Page404.module.css'
import img404 from '../Media/404page.png'


export default function PageNotFound (){
    return(
        <div className={styles.container}>
            <nav className={styles.nav}>
                <Link to="/">
                    <button className={styles.Button}>Back</button>
                </Link>
            </nav>
            <div className={styles.divimg}>
               <img src={img404} alt='not img404' className={styles.img}/>
            </div>
        </div>
    )
}