import React from "react";
import {useSelector} from "react-redux"
import { Link } from "react-router-dom";
import styles from "../Styles/NavBar.module.css"
import {useAuth0} from "@auth0/auth0-react"
import imgcarrito from '../Media/carri.png'
import {isExpired, decodeToken} from "react-jwt"

function NavBar(){
  const  { logout, user, isAuthenticated} = useAuth0()
  let token= document.cookie.split("=")[1]
	let tokenDecoded = decodeToken(token)
  console.log(isExpired(token))
  const cart = useSelector((state) => state.cart)
  
  const count = cart.length

  return(
      <nav className={styles.nav}>
          <div>
            <h4>Events Henry</h4>
          </div>
          <div className={styles.menu}>
          <div> <Link to="/login"><button className={styles.Button}>Login/Sign Up</button></Link></div>
              <div>
             {tokenDecoded.role !== "Guest" && isExpired(token) ?
                     
                      <button className={styles.Button} onClick={() => logout()}>
                        <span>Log Out</span>
                     </button>: <div></div>}
                     </div>


  {tokenDecoded.role === "Partner"  && <Link to="/createEvent">
          
            <button className={styles.Button}>Create an Event</button>
                     </Link>}
            
               
            {token? <div>
                 <Link to='/profile'>
                      <button className={styles.Button}>
                        <span>Profile</span>
                     </button>
                 </Link>
            </div>:<div></div>}
            <div>
                  <Link to='/contact'>
                      <button className={styles.Button}>
                        <span>Contact Us</span>
                     </button>
                 </Link>
                 
              </div>

              <div>
                  <Link to='/cart'>
                    <img className={styles.imgcarrito} src={imgcarrito} alt='img carrito' />
                    <span className={styles.count}>{count}</span>
                    </Link>
              </div>
          </div>
      </nav>
      
  )
};

export default NavBar;