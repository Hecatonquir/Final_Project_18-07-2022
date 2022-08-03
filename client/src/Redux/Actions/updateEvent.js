import axios from "axios"
import swal from "sweetalert"
import { getDetail } from "./getDetails"
export  async function updateEvent (obj,id,dispatch)  {

    console.log(id)
    try {

        await axios.put(`/event/update/${id}`,{data: obj}, {withCredentials: true})
     
         dispatch(getDetail(id))
     
         swal({title: "Done",
             text: "Updated!!",
             icon: "success"})
         
     } catch (error) {
         swal({text:error.response.data, icon: "error"})
         
     }

}