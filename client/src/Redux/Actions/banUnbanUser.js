import axios from "axios"
import swal from "sweetalert"
import getUsers from "./getUsers"

export const  banUnbanUser = async(veredict, email,dispatch) => {

try {
    
    let banedOrNot = await axios.put("http://localhost:3001/user/banUnban", {data: {
        ban: veredict,
        email: email
    }}, {withCredentials:true})
        dispatch(getUsers())
} catch (error) {
    swal({
        title: 'Error',
        icon: 'error',
        text: "An error has ocurred, please contact an Admin",
        timer: 2000,
        buttons: false,
    })
}
  
}