import axios from "axios"
import { UPDATE_STATE_TRUE } from "../ActionTypes/actiontypes"



export default function registerGmail(user,) {

   
    return (dispatch) => {

        if(user) {


        let usertoRegister = {
            Name: user.given_name,
            Username: null,
            Password: null,
            Email: user.email,
            Image: user.picture,
            Location: null,
            Role: null,
        }

    

        

    axios.post("http://localhost:3001/user/registerG",usertoRegister, {withCredentials: true})
    .then(response =>  dispatch({type:UPDATE_STATE_TRUE}))
    .catch(error => console.log(error))
    }

    }
}