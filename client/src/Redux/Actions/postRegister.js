import axios from "axios"
import swal from "sweetalert";

export default async function userRegister(payload){
       console.log("soy la accion user",payload)
        try {
             await axios.post(`http://localhost:3001/user/register`, payload);
             swal(
                "User Register",{
                icon:"sucess"
                })
            
        }
        
        catch (error) {
            alert(error.response.data)
        } 
            
       
}