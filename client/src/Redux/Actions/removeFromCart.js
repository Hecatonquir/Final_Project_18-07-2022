import { REMOVE_ITEM_CART } from "../ActionTypes/actiontypes";

export function removeCart(id){
    return {
        type: REMOVE_ITEM_CART,
        payload: id
    }
}