import React from 'react'
import { useDispatch } from 'react-redux';
import { addCart } from '../Redux/Actions/addToCart';
import styles from '../Styles/Detail.module.css';

function AddToCartButton({id}) {
    const dispatch = useDispatch()
    function handleClick() {
		dispatch(addCart(id));
		alert('added product');
	}
  return (
    <button className={styles.Button2} onClick={() => handleClick()}>
		Add To Cart
	</button>
  )
}

export default AddToCartButton