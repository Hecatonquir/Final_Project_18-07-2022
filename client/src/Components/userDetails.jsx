
import React,{ useEffect } from "react"; 
import { useParams } from "react-router-dom";
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



return (
    <div>
        {user && <div> 
                <h1>{user.Name}</h1>
             </div>}
    </div>
)


}