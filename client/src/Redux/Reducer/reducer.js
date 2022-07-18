import {GET_EVENTS} from "../ActionTypes/actiontypes"
const initialState = {
    allEvents: [],
    eventName: [],
    
}

export default function reducer(state = initialState,{type,payload}) {
    switch(type) {
        case GET_EVENTS:
            return{ ...state, allEvents: payload}

    }
}