import { React, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../Redux/Actions/getDetails";
import {addCart} from '../Redux/Actions/addToCart'
import Loader from "./Loader.jsx";
import styles from "../Styles/Detail.module.css"

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  var event = useSelector((state) => state.eventDetail)
 
  
  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);


  function hundleClick() {
    dispatch(addCart(id))
    alert('added product')
}

  return (
    <div>
      {event[0] ? 
        <div>
          <nav className={styles.nav}>
            <Link to="/">
              <button className={styles.Button}>Back</button>
            </Link>
          </nav>
          <div className={styles.container}>
            <div className={styles.data}>
              <img src={event[0].Image} alt={event.Name} />
              <img src={event.Image} alt={event.Name} />
              <img src={event.Image} alt={event.Name} />
              <img src={event.Image} alt={event.Name} />
            </div>
            <div className={styles.data}>
              <h1>{event[0].Name}</h1>
              <p>City: {event[0].City} Location: {event[0].Location}</p>
              <p>Price: {event[0].Price}$</p>
              <button className={styles.Button2} onClick={() => hundleClick()}>Add To Cart</button>
            </div>
            </div>
          </div>
       : (
        <div>
           <Link to="/">
            <button className={styles.Button}>Back</button>
          </Link>
          <Loader/>
        </div>
      )}
    </div>
  );
}
