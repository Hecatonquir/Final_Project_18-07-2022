import axios from "axios"
import swal from "sweetalert"
import getUsers from "./getUsers"
import { getUserDetails } from "./getUserDetails"

export default async function ticketDone(dispatch,id,veredict,token1) {
console.log(token1)
    try {

      let done = await  axios.put(`/support/id/${id}`, {data: {isDone: veredict}})

        
        dispatch(getUsers(token1))
       
    } catch (error) {
        swal({
            text: "We Cannot update this ticket state at this moment",
            icon: "warning"
        })
        
    }

    }