import React from 'react'
import { useDispatch } from 'react-redux';
import { addCart } from '../Redux/Actions/addToCart';
import styles from '../Styles/Detail.module.css';
import carticon from '../Media/carri.png'
import swal from 'sweetalert';

function AddToCartButton({id}) {
    const dispatch = useDispatch()
    function handleClick() {
		dispatch(addCart(id));
		swal('added product'," ","success");
	}
  return (
    <button className={styles.Button2} onClick={() => handleClick()}>
		Add To <img src={carticon} alt='not imgcart' className={styles.carticon}/>
	  </button>
  )
}

export default AddToCartButton