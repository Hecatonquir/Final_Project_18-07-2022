import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/NavBar.module.css"



function NavBar(){
  return(
      <nav className={styles.nav}>
          <div>
            <h4>EVENTS</h4>
          </div>
          <div className={styles.menu}>
             <div>
                  <Link to='/contact'>
                      <button>
                        <span>Contact Us</span>
                     </button>
                 </Link>
              </div>
              <div>
              <Link to='/algunlado'>
                      <button>
                        <span>Login</span>
                     </button>
                 </Link>
            </div>
                 <div>
                 <Link to='/algunlado'>
                      <button>
                        <span>Sign Up</span>
                     </button>
                 </Link>
            </div>
            <div>
                 <Link to='/algunlado'>
                      <button>
                        <span>Profile</span>
                     </button>
                 </Link>
            </div>
          </div>
      </nav>
      
  )
};

export default NavBar;