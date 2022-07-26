import axios from "axios"
import swal from "sweetalert";

export async function postEvent(event){
    
        try {
             await axios.post(`http://localhost:3001/event`, event);
            swal("Post Created!"," ","success")
            
        }
        
        catch (error) {
            alert(error.response.data)
        } 
            
       
}