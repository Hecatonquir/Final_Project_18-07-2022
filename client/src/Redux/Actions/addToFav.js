import { ADD_TO_FAVOURITES } from "../ActionTypes/actiontypes";

export function addToFavourites(id){
    return {
        type: ADD_TO_FAVOURITES,
        payload: id
    }
}