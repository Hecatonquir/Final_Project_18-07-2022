import axios from "axios"
import { UPDATE_STATE_TRUE } from "../ActionTypes/actiontypes";
import swal from "sweetalert";

export async function logInUser(payload,dispatch,navigate){
       
        try {
             await axios.post(`http://localhost:3001/user/login`, payload, {withCredentials: true});
             
             swal({
                title: 'Login Success',
                text: 'Redirecting...',
                icon: 'success',
                timer: 2000,
                buttons: false,
            })
            
          
            setTimeout(() => {
                navigate("/")
                dispatch({type:UPDATE_STATE_TRUE});
            }, 2000);
                
           
            
        }
        
        catch (error) {
            swal({
                title: 'Error',
                icon: 'error',
                timer: 2000,
                buttons: false,
            })
            
        } 
            
       
}