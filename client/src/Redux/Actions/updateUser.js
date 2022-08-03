import axios from "axios"
import swal from "sweetalert"
import { getUserDetails } from "./getUserDetails"

export default async function updateUser(obj, id, dispatch) {

try {

   await axios.put(`/user/update/${id}`,{data: obj}, {withCredentials: true})

    dispatch(getUserDetails({id:id}))

    swal({title: "Done",
        text: "Updated!!",
        icon: "success"})
    
} catch (error) {
    swal({text:error.response.data, icon: "error"})
    
}
    
}