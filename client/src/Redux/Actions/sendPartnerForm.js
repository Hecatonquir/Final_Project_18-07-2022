import axios from "axios"
import swal from "sweetalert";

export async function sendPartnerForm(formPartner){
    
        try {
             await axios.post(`http://localhost:3001/support/createTicket`, formPartner, {withCredentials: true});
            swal("Post Created!"," ","success")
        }
        
        catch (error) {
            alert(error.response.data)
        } 
}