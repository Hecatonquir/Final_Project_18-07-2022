import axios from "axios"


export async function logInUser(payload){
       
        try {
             await axios.post(`http://localhost:3001/user/login`, payload, {withCredentials: true});
            alert("Logged in !")
            
        }
        
        catch (error) {
            alert(error.response.data)
        } 
            
       
}