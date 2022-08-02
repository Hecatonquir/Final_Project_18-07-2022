import axios from "axios"
import swal from "sweetalert"
import getUsers from "./getUsers"


export default function ticketDone(dispatch,id,veredict) {

    try {

      let done =  axios.put(`/support/id/${id}`, {data: {isDone: veredict}})

        dispatch(getUsers())
        
    } catch (error) {
        swal({
            text: "We Cannot update this ticket state at this moment",
            icon: "warning"
        })
        
    }

    }