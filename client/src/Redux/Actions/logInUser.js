import axios from "axios"
import { UPDATE_STATE_TRUE } from "../ActionTypes/actiontypes";


export async function logInUser(payload,dispatch){
       
        try {
             await axios.post(`http://localhost:3001/user/login`, payload, {withCredentials: true});
            alert("Logged in !")

            dispatch({type:UPDATE_STATE_TRUE})
            
        }
        
        catch (error) {
            console.log(error.response.data)
        } 
            
       
}