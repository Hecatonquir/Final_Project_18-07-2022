import axios from "axios"
import { USER_DETAILS } from "../ActionTypes/actiontypes"


export  const getUserDetails =  (id) => {

    return async (dispatch) => {

        
        try {
            console.log("hola")

            let userFound = await axios.put(`http://localhost:3001/user/getUserById/${id.id}`, {withCredentials: true})


            dispatch({type: USER_DETAILS, payload: userFound.data})


            
        } catch (error) {
            
        }

       

    }
}