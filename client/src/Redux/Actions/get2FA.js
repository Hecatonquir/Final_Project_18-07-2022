import axios from "axios"
import swal from "sweetalert"


export default async function get2FA(id) {

    try {
        
    

    let data = await axios.put("/user/get2fa", {id: id})
        
    swal({text: `${data.data}. Please keep it safe`, icon: "success"})

    }catch (error) {
        swal({text: error.response.data, icon:"error"})
        
    }



}