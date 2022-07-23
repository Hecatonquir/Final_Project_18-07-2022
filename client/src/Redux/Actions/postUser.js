import axios from "axios"


export async function postUser(payload){
       
        try {
             await axios.post(`http://localhost:3001/user/login`, payload);
            alert("Post Created!")
            
        }
        
        catch (error) {
            alert(error.response.data)
        } 
            
       
}