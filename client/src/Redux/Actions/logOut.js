import { GET_EVENTS } from "../ActionTypes/actiontypes"



export default function logout(cooki, state) {
    return (dispatch) => {

    document.cookie=cooki+'=; Max-Age=-99999999;'

    dispatch({type: GET_EVENTS, paypload: state })
    }
}