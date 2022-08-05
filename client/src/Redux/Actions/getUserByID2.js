import axios from 'axios';
import { GET_USER_BY_ID2 } from '../ActionTypes/actiontypes';

export function getUserByID2(userID){
    return async (dispatch) => {
        try {
            const json = await axios.get(`/user/getUserByID2/${userID}` )
            //console.log(json.data) //------> {...} 
            return (dispatch( { type: GET_USER_BY_ID2,
                                payload: json.data } 
                            ));
        }catch(error) {
            console.log(error.stack)
        }
    }
}