import {GET_EVENTS, GET_NAME_EVENTS,ADD_TO_FAVOURITES,REMOVE_FROM_FAVOURITES, GET_USERS,SHOW_EVENTS_USER, NEED_BACKUP, GET_DETAILS, ADD_REMOVE_FILTER,ADD_ITEM_CART, REMOVE_ITEM_CART, REMOVE_ALL_ITEM_CART, CLEAR_CART, UPDATE_STATE_FALSE, UPDATE_STATE_TRUE, CLEAR_DETAIL} from "../ActionTypes/actiontypes"
const initialState = {

    allEvents: [],
    eventsBackUp: [],
    eventName: [],
    showToUser: [],
    filteredEvents: [],
    eventDetail: {},
    loginState: false,
    allUsers: [],
    cart: [],
    favourites: []
}

export default function reducer(state = initialState,{type,payload}) {
    switch(type) {
        case GET_EVENTS:
            return{ ...state, allEvents: payload}

            case GET_USERS:
                return{...state, allUsers: payload}

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


                    case ADD_TO_FAVOURITES: 
            const item = state.allEvents.find((event) => event.ID === payload)
            const itemFav = state.favourites.find((event) => event.ID === item.ID)
            return itemFav
            ? {...state}
            : {...state, favourites: [...state.favourites, item]}


            case REMOVE_FROM_FAVOURITES:
                const filterFav = state.favourites.filter((item) => item.ID !== payload)
                return {...state, favourites: filterFav}

            default:
                return state
            
        

    }
}