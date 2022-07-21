import {React} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { clearCart } from '../Redux/Actions/clearCart'
import CardItem from './CartItem'
import styles from '../Styles/Cart.module.css'

export default function Cart() {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)

    function hundleClick(){
        dispatch(clearCart())
    }

    return(
        <div>
            <nav className={styles.nav}>
            <Link to='/'><button>BACK</button></Link>
            </nav>
            <p>Your selected events</p>
            {
                cart && cart.map( (e) => (
                    <div key={e.ID}>
                        <CardItem
                        id={e.ID}
                        name={e.Name}
                        image={e.Image}
                        price={e.Price}
                        purchasedItem={e.PurchasedItem}
                        />
                    </div>
                ))
            }
            <button onClick={() => hundleClick()}>Remove</button>
            <button>Buy</button>
        </div>
    )
}