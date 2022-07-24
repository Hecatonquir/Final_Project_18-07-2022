import React from 'react'
import {useDispatch} from 'react-redux'
import { addCart } from '../Redux/Actions/addToCart'
import { removeCart } from '../Redux/Actions/removeFromCart'
import { removeAllCart } from '../Redux/Actions/removeAllFromCart'
import styles from '../Styles/CartItem.module.css'
import imgdelete from '../Media/delete.png'

export default function CardItem({id, name, image, price, purchasedItem}) {

    const dispatch = useDispatch()
   
    function hundleAddItem() {
        dispatch(addCart(id))
    }

    function hundleRemoveItem(){
        dispatch(removeCart(id))
    }

    function hundleDelete(){
        dispatch(removeAllCart(id))
    }

    return(
        <div className={styles.containerTotal}>
            <div className={styles.container}>
            <img className={styles.img} src={image} alt='img event' />
            <div className={styles.name}>
            <h6>{name}</h6>
            </div>
            <div>
                <h6>Quantity Item</h6>
                <div className={styles.quantity}>
                    <button className={styles.operation} onClick={() => hundleRemoveItem()}>-</button>
                    <p className={styles.purchased}>{purchasedItem}</p>
                    <button className={styles.operation} onClick={() => hundleAddItem()}>+</button>
                </div>
            </div>
            <div>
                <h6>Price</h6>
                <p>${price*purchasedItem}</p>
            </div>
            <img src={imgdelete} alt='not imgdelete' onClick={() => hundleDelete()} className={styles.imgdelete}/>
            </div>
        </div>
        
    )
}