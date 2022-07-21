import axios from "axios"


export async function postEvent(event){
    
        try {
             await axios.post(`http://localhost:3001/event`, event);
            alert("Post Created!")
            
        }
        
        catch (error) {
            alert(error.response.data)
        } 
            
       
}