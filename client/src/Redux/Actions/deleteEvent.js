import axios from "axios"
import swal from "sweetalert"
import getEvents from "./getEvents"

export const deleteEvent = async (id,dispatch) => {

try {

    let DeletedEVENT = await axios.delete("http://localhost:3001/event/delete",{data: {ID:id}})

    dispatch(getEvents())

    swal({
        title: 'Done!',
        text: "Event Deleted",
        icon: 'success',
        timer: 1500,
        buttons: false,
    })
    
} catch (error) {
    swal({
        title: 'Error',
        icon: 'error',
        timer: 2000,
        buttons: false,
    })
    
}
   



}