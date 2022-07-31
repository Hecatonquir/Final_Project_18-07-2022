import { UPDATE_STATE_FALSE } from "../ActionTypes/actiontypes"
import { useAuth0 } from "@auth0/auth0-react"


export default function logOut(dispatch) {
 
    document.cookie='access-control=; Max-Age=-99999999;'
    document.cookie="auth0.2MXTHb1HKWD4UvsRtIwH3ZxR9hdC9QUW.is.authenticated=; Max-Age=-99999999;"
    document.cookie="_legacy_auth0.2MXTHb1HKWD4UvsRtIwH3ZxR9hdC9QUW.is.authenticated=; Max-Age=-99999999;"
    

    
        dispatch({type: UPDATE_STATE_FALSE})
       
    
  


    
    
    


}