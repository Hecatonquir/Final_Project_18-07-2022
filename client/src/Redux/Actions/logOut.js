import { UPDATE_STATE_FALSE } from "../ActionTypes/actiontypes"



export default function logout(cooki,dispatch) {
 

    document.cookie=cooki+'=; Max-Age=-99999999;'

   dispatch({type: UPDATE_STATE_FALSE})

}