import React,{ useEffect } from "react"; 
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CLEAR_USER_DETAILS } from "../Redux/ActionTypes/actiontypes";
import { getUserDetails } from "../Redux/Actions/getUserDetails";



export default function Userdetails() {
let ID = useParams()
let dispatch = useDispatch()
let user = useSelector(state => state.userDetails)


useEffect(() => {

    dispatch(getUserDetails(ID))
  

  return () => {
    dispatch({type: CLEAR_USER_DETAILS})
  }
}, [])

console.log(user.Cart)

return (
    <div>
      
        {user && <div> 
          <Link to="/welcomeA"><button>Back</button></Link>
          <div><h5>User Details</h5></div>

          <div>
              <img src={`${user.Image}`}></img>
                </div>


          <div>
          <label>Name: </label>
                <h1>{user.Name}</h1>
                </div>

                <div>

                <label>Username:</label>
                <h1>{user.Username}</h1>
                </div>

                <div>
                <label>Email:</label>
                <h1>{user.Email}</h1>
                </div>

               
                <div>
                  <label>Location:</label>
                  <h1>{user.Location}</h1>
                </div>


                <div>
                  <label>Role:</label>
                  <h1>{user.Role}</h1>
                </div>


                <div>
                  <label>Role:</label>
                  <h1>{user.Role}</h1>
                </div>


                <div>
                <label>Is Online:</label>
                <h1>{user.LoggedIn}</h1>
                </div>

                <div>
                  <label>Is Ban:</label>
                  <h1>{user.isBan ? "Yes" : "No"}</h1>
                </div>

                {console.log(user.Cart)}

                
                
             </div>}
             

            

    </div>
)


}