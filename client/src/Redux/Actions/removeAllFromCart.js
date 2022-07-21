import { REMOVE_ALL_ITEM_CART } from "../ActionTypes/actiontypes";

export function removeAllCart(id){
    return {
        type: REMOVE_ALL_ITEM_CART,
        payload: id
    }
}