import {React} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { clearCart } from '../Redux/Actions/clearCart'
import CardItem from './CartItem'
import styles from '../Styles/Cart.module.css'
import imgcarrito from '../Media/emptycart.png'

export default function Cart() {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    var totalAmount = 0;

    for (let i = 0; i < cart.length; i++) {
        totalAmount = totalAmount + (cart[i].Price * cart[i].PurchasedItem);
    }

    function hundleClick(){
        dispatch(clearCart())
    }
    
    return(
        <div>
            <nav className={styles.nav}>
            <Link to='/'><button className={styles.Button}>BACK</button></Link>
            </nav>
            <h4 className={styles.title}>SHOPPING CART</h4>
            <p className={styles.subtitle}>Your selected events</p>
            <div className={styles.container}>
                <div>
                    {
                    cart.length ? cart.map( (item) => (
                        <div key={item.ID}>
                            <CardItem
                            id={item.ID}
                            name={item.Name}
                            image={item.Image[0]}
                            price={item.Price}
                            purchasedItem={item.PurchasedItem}
                            />
                        </div>
                    ))
                    :  <div>
                        <img className={styles.imgcarrito} src={imgcarrito} alt='not imgcarrito' />
                    </div>
                    }
                </div>
            <div className={styles.containeramount}>
            <h5 className={styles.amount}>Total Price: ${totalAmount}</h5>
            <button className={styles.Button2}>Buy</button>
            </div>
            </div>
            <div className={styles.divButton}>
                <button className={styles.Button2} onClick={() => hundleClick()}>Remove</button>
                
            </div>
        </div>
    )
}