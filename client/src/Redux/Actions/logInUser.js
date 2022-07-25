import axios from "axios"
import { UPDATE_STATE_TRUE } from "../ActionTypes/actiontypes";
import swal from "sweetalert";


export async function logInUser(payload,dispatch,navigate){
    
       
        try {
             await axios.post(`http://localhost:3001/user/login`, payload, {withCredentials: true});
             dispatch({type:UPDATE_STATE_TRUE})
             swal({
                title: 'Login Success',
                text: 'Redirecting...',
                icon: 'success',
                timer: 2000,
                buttons: false,
            })
            .then(() => {
             navigate("/");
            });
          
            
        }
        
        catch (error) {
            console.log(error.response.data)
        } 
            
       
}