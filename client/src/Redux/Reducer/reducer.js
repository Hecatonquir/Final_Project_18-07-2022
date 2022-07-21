import {GET_EVENTS, GET_NAME_EVENTS,SHOW_EVENTS_USER, NEED_BACKUP, GET_DETAILS, ADD_REMOVE_FILTER,ADD_ITEM_CART, REMOVE_ITEM_CART, REMOVE_ALL_ITEM_CART, CLEAR_CART, PRE_FILTER} from "../ActionTypes/actiontypes"
const initialState = {
    allEvents: [],
    eventsBackUp: [],
    eventName: [],
    showToUser: [],
    filteredEvents: [],
    eventDetail: {},
    cart: []
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
            return {...state, filteredEvents: state.filteredEvents.concat(payload)}

            case GET_DETAILS: 
            return {...state, eventDetail: payload}

            case ADD_ITEM_CART: 
            const newItem = state.allEvents.find((event) => event.id === payload)
           
            const itemInCart = state.cart.find((item) => item.id === newItem.id)
            
            return itemInCart 
            ? {...state, cart: state.cart.map((item) => 
                item.id === newItem.id
                ? {...item, PurchasedItem: item.PurchasedItem + 1}
                : item
                )}
            : {...state, cart: [...state.cart, {...newItem, PurchasedItem: 1}]}

            case REMOVE_ITEM_CART: 
            const deleteItem = state.cart.find((item) => item.id === payload)
            return deleteItem.PurchasedItem > 1
            ? {...state, cart: state.cart.map((item) =>
                item.id === payload 
                ? {...item, PurchasedItem: item.PurchasedItem -1}
                : item)}
            : {...state, cart: state.cart.filter((item) => item.id !== payload)}

            case REMOVE_ALL_ITEM_CART:
            return {...state, cart: state.cart.filter((item) => item.id !== payload)}

            case CLEAR_CART: 
            return{...state, cart: []}



            default:
                return state
            
        

    }
}