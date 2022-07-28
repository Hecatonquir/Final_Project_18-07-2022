import { UPDATE_DB_CART } from "../ActionTypes/actiontypes";

export function updateCart(id){
    return {
        type: UPDATE_DB_CART,
        payload: id
    }
}