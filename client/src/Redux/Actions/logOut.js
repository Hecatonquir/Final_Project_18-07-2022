import { UPDATE_STATE_FALSE } from "../ActionTypes/actiontypes"
import { useAuth0 } from "@auth0/auth0-react"


export default function logOut(dispatch,isAuthenticated,logout) {
 
    
    document.cookie='access-token=; Max-Age=-99999999;'
    document.cookie="auth0.2MXTHb1HKWD4UvsRtIwH3ZxR9hdC9QUW.is.authenticated=; Max-Age=-99999999;"
    document.cookie="_legacy_auth0.2MXTHb1HKWD4UvsRtIwH3ZxR9hdC9QUW.is.authenticated=; Max-Age=-99999999;"

    if(isAuthenticated) {
    logout()
    setTimeout(() => {
        dispatch({type: UPDATE_STATE_FALSE})
    }, 1000);
    }
    else {

        dispatch({type: UPDATE_STATE_FALSE})
        
    }

    
    
    


}