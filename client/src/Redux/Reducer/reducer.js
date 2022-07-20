import {GET_EVENTS, GET_NAME_EVENTS,SHOW_EVENTS_USER, NEED_BACKUP, GET_DETAILS, ADD_REMOVE_FILTER, PRE_FILTER} from "../ActionTypes/actiontypes"
const initialState = {
    allEvents: [],
    eventsBackUp: [],
    eventName: [],
    showToUser: [],
    filteredEvents: [],
    eventDetail: {},

}

export default function reducer(state = initialState,{type,payload}) {
    switch(type) {
        case GET_EVENTS:
            return{ ...state, allEvents: payload}

            case NEED_BACKUP:
            return{ ...state, eventsBackUp: payload}

            case GET_NAME_EVENTS:
            return{ ...state, eventName: payload}

            case SHOW_EVENTS_USER:
            return { ...state, showToUser: payload}

            case ADD_REMOVE_FILTER:
            return {... state, filteredEvents: state.filteredEvents.concat(payload)}

            case GET_DETAILS: 
            return {...state, eventDetail: payload}



            default:
                return state
            
        

    }
}