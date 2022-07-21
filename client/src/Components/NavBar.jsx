import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/NavBar.module.css"
import {useAuth0} from "@auth0/auth0-react"



function NavBar(){
  const  {loginWithRedirect, logout, user, isAuthenticated} = useAuth0()
  console.log(user)
  
  return(
      <nav className={styles.nav}>
          <div>
            <h4>Events Henry</h4>
          </div>
          <div className={styles.menu}>

              <div>
             { !isAuthenticated ? 
                      <button className={styles.Button} onClick={() => loginWithRedirect()}>
                        <span>Log In/Sign Up</span>
                     </button>
                 :
          
                      <button className={styles.Button} onClick={() => logout()}>
                        <span>Log Out</span>
                     </button>
                 
}
  {isAuthenticated && <Link to="/createEvent">
          
            <button className={styles.Button}>Create an Event</button>
                     </Link>}
            </div>
               
            {isAuthenticated? <div>
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
                    <button className={styles.Button}>
                      <span>Shoping Cart</span>
                    </button>
                    </Link>
              </div>
          </div>
      </nav>
      
  )
};

export default NavBar;