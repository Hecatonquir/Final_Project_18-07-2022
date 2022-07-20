import axios from "axios"


export function postEvent(payload){
    return async function (){
        try {
             await axios.post('ruta', payload);
            alert("Post Created!")
            
        }
        
        catch (error) {
            alert(error.response.data)
        } 
            
        }
       
}