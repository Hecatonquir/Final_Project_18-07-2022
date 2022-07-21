import React from 'react'
import {useDispatch} from 'react-redux'
import { addCart } from '../Redux/Actions/addToCart'
import { removeCart } from '../Redux/Actions/removeFromCart'
import { removeAllCart } from '../Redux/Actions/removeAllFromCart'
import styles from '../Styles/CartItem.module.css'

export default function CardItem({id, name, image, price, purchasedItem}) {

    const dispatch = useDispatch()
   
    function hundleAddItem(id) {
        dispatch(addCart(id))
    }

    function hundleRemoveItem(id){
        dispatch(removeCart(id))
    }

    function hundleDelete(id){
        dispatch(removeAllCart(id))
    }

    return(
        <div className={styles.containerTotal}>
            <div className={styles.container}>
            <h4>{name}</h4>
            <img className={styles.img} src={image} alt='img event' />
            <div>
                <h5>Purchased Item</h5>
                <div className={styles.quantity}>
                    <button className={styles.operation} onClick={() => hundleRemoveItem()}>-</button>
                    <p className={styles.purchased}>{purchasedItem}</p>
                    <button className={styles.operation} onClick={() => hundleAddItem()}>+</button>
                </div>
            </div>
            <div>
                <h5>Price</h5>
                <p>{price*purchasedItem}$</p>
            </div>
            <button onClick={() => hundleDelete()}>Delete</button>
            </div>
        </div>
        
    )
}