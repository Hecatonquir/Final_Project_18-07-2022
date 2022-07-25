import axios from "axios"
import { UPDATE_STATE_TRUE } from "../ActionTypes/actiontypes";
import swal from "sweetalert";

export async function logInUser(payload,dispatch){
       
        try {
             await axios.post(`http://localhost:3001/user/login`, payload, {withCredentials: true});
             swal({
                title: 'Login Success',
                text: 'Redirecting...',
                icon: 'success',
                timer: 2000,
                buttons: false,
            })
            .then(() => {
                window.location.href = "http://localhost:3000";
            });
           dispatch({type:UPDATE_STATE_TRUE})
            
        }
        
        catch (error) {
            console.log(error.response.data)
        } 
            
       
}