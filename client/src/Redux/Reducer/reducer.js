import {GET_EVENTS, GET_NAME_EVENTS,SHOW_EVENTS_USER, NEED_BACKUP, GET_DETAILS, ADD_REMOVE_FILTER,ADD_ITEM_CART, REMOVE_ITEM_CART, REMOVE_ALL_ITEM_CART, CLEAR_CART, UPDATE_STATE_FALSE, UPDATE_STATE_TRUE, CLEAR_DETAIL} from "../ActionTypes/actiontypes"
const initialState = {

    allEvents: [],
    eventsBackUp: [],
    eventName: [],
    showToUser: [],
    filteredEvents: [],
    eventDetail: {},
    loginState: false,
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
            const newItem = state.allEvents.find((event) => event.ID === payload)
           
            const itemInCart = state.cart.find((item) => item.ID === newItem.ID)
            console.log(itemInCart)
            return itemInCart 
            ? {...state, cart: state.cart.map((item) => 
                item.ID === newItem.ID
                ? {...item, PurchasedItem: item.PurchasedItem + 1}
                : item
                )}
            : {...state, cart: [...state.cart, {...newItem, PurchasedItem: 1}]}

            case REMOVE_ITEM_CART: 
            const deleteItem = state.cart.find((item) => item.ID === payload)
            return deleteItem.PurchasedItem > 1
            ? {...state, cart: state.cart.map((item) =>
                item.ID === payload 
                ? {...item, PurchasedItem: item.PurchasedItem -1}
                : item)}
            : {...state, cart: state.cart.filter((item) => item.ID !== payload)}

            case REMOVE_ALL_ITEM_CART:
            return {...state, cart: state.cart.filter((item) => item.ID !== payload)}

            case CLEAR_CART: 
            return{...state, cart: []}

            case CLEAR_DETAIL:
                return {
                    ...state,
                    eventDetail: {}
                }

                case UPDATE_STATE_TRUE:
                    return {...state, loginState: true}

                    case UPDATE_STATE_FALSE:
                    return {...state, loginState: false}

            default:
                return state
            
        

    }
}