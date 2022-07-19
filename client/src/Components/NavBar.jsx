import React from "react";
import { Link } from "react-router-dom";



function NavBar(){
  return(
      <nav>
          <div>
             <div>
                  <Link to='/algunlado'>
                      <button>
                        <span>contactanos</span>
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
                        <span>Sing Up</span>
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