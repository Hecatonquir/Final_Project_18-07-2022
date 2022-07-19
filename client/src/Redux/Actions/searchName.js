import axios from "axios";
import { GET_NAME_EVENTS } from "../ActionTypes/actiontypes";


export function getNameEvent(name){
    return async function (dispatch){
        try {
            var json = await axios.get(`http://localhost:3001/event?name=${name}`)
              return dispatch({
                type: GET_NAME_EVENTS,
                payload: json.data
            })
            
        } catch (error){
            alert("events not found");
           console.log(error)
            
        }
    }}