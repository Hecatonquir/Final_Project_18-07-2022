import axios from "axios"
import { GET_EVENTS, NEED_BACKUP } from "../ActionTypes/actiontypes"

export default function getEvents() {

    return  (dispatch) =>{

    axios(`http://localhost:3001/event/allEvents`)
    .then(response => {return dispatch({type: GET_EVENTS, payload: response.data}),dispatch({type: NEED_BACKUP, payload: response.data}),console.log(response.data)})
    .catch(error => alert(error.response.data))
    }

}