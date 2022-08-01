import React,{ useEffect } from "react"; 
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CLEAR_USER_DETAILS } from "../Redux/ActionTypes/actiontypes";
import { getUserDetails } from "../Redux/Actions/getUserDetails";
import { Placeholder } from "react-bootstrap";



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

          {<div>
              <img src={`${user.Image}`} alt="No Img"></img>
                </div> }


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
                <h1>{user.LoggedIn ? "Yes": "No"}</h1>
                </div>

                <div>
                  <label>Is Ban:</label>
                  <h1>{user.isBan ? "Yes" : "No"}</h1>
                </div>

               <div>
                <label>Items in Cart</label>
                {user.Cart && user.Cart.map(el =>(
                  <div>
                  <div>
                    <label>Event Name:</label>
                    <span>{el.Name}</span>
                    </div>

                    <div>
                    <label>Event Price:</label>
                    <span>{el.Price}</span>
                    </div>


                    <div>
                    <label>Event Location:</label>
                    <span>{el.Location}</span>
                    </div>

                    </div>
                  
                ))}
                </div>
                
             </div>}

           
             

            

    </div>
)


}