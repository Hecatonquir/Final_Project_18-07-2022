import { ADD_ITEM_CART } from "../ActionTypes/actiontypes";

export function addCart(id){
    return {
        type: ADD_ITEM_CART,
        payload: id
    }
}