import { GET_DETAILS } from "../ActionTypes/actiontypes";
import axios from "axios"

export function getDetail(){
    return async (dispatch) =>{
        try {
            let json = await axios('ruta');
            return dispatch({
                type: GET_DETAILS,
                payload: json.data
            })
        } catch (error) {
           console.log(error);
        }
    }
}