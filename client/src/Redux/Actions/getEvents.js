import axios from "axios"
import { GET_EVENTS, NEED_BACKUP } from "../ActionTypes/actiontypes"

export default async function getEvents() {

    return (dispatch) =>{

    axios(`http://localhost:3001/api/events`)
    .then(response => {return dispatch({type: GET_EVENTS, payload: response}),dispatch({type: NEED_BACKUP, payload: response})})
    .catch(error => alert(error.response.data))
    }

}