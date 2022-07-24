import { CLEAR_DETAIL } from "../ActionTypes/actiontypes";

export function clearDetail(){
    return dispatch=> dispatch({type: CLEAR_DETAIL})
}