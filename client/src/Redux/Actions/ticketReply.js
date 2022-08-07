import axios from "axios"
import swal from "sweetalert"

export default async function ticketReply(answer,id) {

try {

    let reply = axios.put(`/support/reply/${id}`, {data: answer})

    swal({title: "Done", text: "Your answer has been sent", icon: "success"})
    
} catch (error) {

    swal({title: "Error", text: "Cannot send at this moment", icon: "error"})
    
}
   

}