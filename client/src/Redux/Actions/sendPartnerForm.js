import axios from "axios"
import swal from "sweetalert";

export async function sendPartnerForm(formPartner){
    
        try {
             await axios.post(`http://localhost:3001/support/`, formPartner, {withCredentials: true});
            swal({title: "Submitted!", text: "Thanks for your request, an Admin will review your submit and will reply very soon!", icon:"success"})
        }
        
        catch (error) {
            alert(error.response.data)
        } 
}
