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
                                
            }, 2000);
                
           
           
            
        }
        
        catch (error) {
            console.log(error.response.data)
            swal({
                title: 'Error',
                icon: 'error',
                text: error.response.data,
                timer: 1000,
                buttons: false,
            })
            
        } 
            
       
}