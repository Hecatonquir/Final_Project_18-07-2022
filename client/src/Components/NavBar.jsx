import React from "react";
import {useSelector,useDispatch} from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import styles from "../Styles/NavBar.module.css"
import {useAuth0} from "@auth0/auth0-react"
import imgcarrito from '../Media/carri.png'
import {isExpired, decodeToken} from "react-jwt"
import logOut from "../Redux/Actions/logOut";
function NavBar(){
  let {isAuthenticated,logout,user} = useAuth0()

  let token= document.cookie.split(";").filter(el => el.includes("access-token")).toString().split("=")[1]
  console.log(document.cookie)
	let tokenDecoded = decodeToken(token)
 let dispatch = useDispatch()
  const logoutState = useSelector((state) => state.allEvents)
  const cart = useSelector((state) => state.cart)
  const events = useSelector((state) => state.showToUser);
  const active = useSelector((state) => state.loginState)
  const count = cart.length


	
  	
	
  return(
      <nav className={styles.nav}>
          <div>
            <h4>Events Henry</h4>
          </div>
          
          <div className={styles.menu}>
        {!token || !active ? <div> <Link to="/login"><button className={styles.Button}>Login/Sign Up</button></Link></div>:<div></div>}
              <div>
             {token && tokenDecoded.role !== "Guest" && active &&
                     
                      <button className={styles.Button} onClick={() => (logOut("access-token",dispatch, isAuthenticated, logout))}>
                        <span>Log Out</span>
                     </button>}
                     </div> 


  {token && tokenDecoded.role === "Partner"  && active && <Link to="/createEvent">
          
            <button className={styles.Button}>Create an Event</button>
                     </Link>}
            
               
            {token && active && <div>
                 <Link to='/profile'>
                      <button className={styles.Button}>
                        <span>Profile</span>
                     </button>
                 </Link>
            </div>}
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