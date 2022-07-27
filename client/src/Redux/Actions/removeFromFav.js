

import { REMOVE_FROM_FAVOURITES } from "../ActionTypes/actiontypes";

export function removeFromFavourites(id){
    return {
        type: REMOVE_FROM_FAVOURITES,
        payload: id
    }
}