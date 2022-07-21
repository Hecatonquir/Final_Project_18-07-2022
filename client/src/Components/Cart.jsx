import {React} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { clearCart } from '../Redux/Actions/clearCart'
import CardItem from './CartItem'
import styles from '../Styles/Cart.module.css'

export default function Cart() {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    console.log(cart)

    function hundleClick(){
        dispatch(clearCart())
    }

    return(
        <div>
            <nav className={styles.nav}>
            <Link to='/'><button className={styles.Button}>BACK</button></Link>
            </nav>
            <h4 className={styles.title}>SHOPING CART</h4>
            <p className={styles.subtitle}>Your selected events</p>
            {
                cart && cart.map( (item) => (
                    <div key={item.ID}>
                        <CardItem
                        id={item.ID}
                        name={item.Name}
                        image={item.Image}
                        price={item.Price}
                        purchasedItem={item.PurchasedItem}
                        />
                    </div>
                ))
            }
            <div className={styles.divButton}>
                <button className={styles.Button2} onClick={() => hundleClick()}>Remove</button>
                <button className={styles.Button2}>Buy</button>
            </div>
        </div>
    )
}