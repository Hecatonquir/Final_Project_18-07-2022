import axios from "axios"
import swal from "sweetalert"
import { getDetail } from "./getDetails"
export  async function increaseQuantity (quantity,id,dispatch)  {

    console.log(id)
    try {

        await axios.put(`/event/updateQuantity`,{ID: id, newStock: parseInt(quantity)}, {withCredentials: true})
     
         dispatch(getDetail(id))
     
         swal({title: "Done",
             text: "Updated!!",
             icon: "success"})
         
     } catch (error) {
         swal({text:error.response.data, icon: "error"})
         
     }

}