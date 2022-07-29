import axios from "axios"
import { LOAD_CART, UPDATE_STATE_TRUE } from "../ActionTypes/actiontypes";
import swal from "sweetalert";


export async function logInUser(payload,navigate,dispatch){

    
       
        try {
<<<<<<< HEAD
            let userr = await axios.post(`http://localhost:3001/user/login`, payload, {withCredentials: true});
       
            console.log(userr)
=======
             let user = await axios.post(`http://localhost:3001/user/login`, payload, {withCredentials: true});
             console.log(user.data[0].Cart)
             dispatch({type: LOAD_CART, payload: user.data[0].Cart})
>>>>>>> Development
            
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
