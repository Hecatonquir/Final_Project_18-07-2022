import axios from "axios"
import { USER_DETAILS } from "../ActionTypes/actiontypes"


export  const getUserDetails =  (id) => {
console.log(id)
    return async (dispatch) => {

        
        try {
            

            let userFound = await axios.put(`/user/getUserById/${id.id || id}`, {withCredentials: true})


            dispatch({type: USER_DETAILS, payload: userFound.data})


            
        } catch (error) {
            console.log("hubo un error")
            
        }

       

    }
}