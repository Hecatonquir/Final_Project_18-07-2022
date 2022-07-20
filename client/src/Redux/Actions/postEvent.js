import axios from "axios"


export function postEvent(payload){
    return async function (){
        try {
             await axios.post('http://localhost:3001/event', payload);
            alert("Post Created!")
            
        }
        
        catch (error) {
            alert(error.response.data)
        } 
            
        }
       
}