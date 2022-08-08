import axios from 'axios';
import {
	GET_EVENTS,
	GET_NAME_EVENTS,
	ADD_TO_FAVOURITES,
	REMOVE_FROM_FAVOURITES,
	GET_USERS,
	SHOW_EVENTS_USER,
	NEED_BACKUP,
	GET_DETAILS,
	ADD_REMOVE_FILTER,
	ADD_ITEM_CART,
	REMOVE_ITEM_CART,
	REMOVE_ALL_ITEM_CART,
	CLEAR_CART,
	UPDATE_STATE_FALSE,
	UPDATE_STATE_TRUE,
	CLEAR_DETAIL,
	UPDATE_DB_CART,
	LOAD_CART,
	USER_DETAILS,
	CLEAR_USER_DETAILS,
	USERS_BACKUP,
	GET_USER_BY_ID2,
	// SET_COORDS,
} from '../ActionTypes/actiontypes';

const initialState = {
	allEvents: [],
	eventsBackUp: [],
	usersBackUp: [],
	eventName: [],
	showToUser: [],
	filteredEvents: [],
	eventDetail: [],
	loginState: false,
	allUsers: [],
	cart: [],
	favourites: [],
	userDetails: {},
	userInfo: {},
	// coords: [],
};

export default function reducer(state = initialState, { type, payload }) {
	switch (type) {
		case GET_EVENTS:
			return { ...state, allEvents: payload };

		case GET_USERS:
			return { ...state, allUsers: payload };

		case NEED_BACKUP:
			return { ...state, eventsBackUp: payload };

		case USERS_BACKUP:
			return { ...state, usersBackUp: payload };

		case GET_NAME_EVENTS:
			return { ...state, eventName: payload };

		case SHOW_EVENTS_USER:
			return { ...state, showToUser: payload };

		case ADD_REMOVE_FILTER:
			return { ...state, filteredEvents: state.filteredEvents.concat(payload) };

		case GET_DETAILS:
			return { ...state, eventDetail: payload };

		case LOAD_CART:
			return { ...state, cart: payload };

		case 'LOAD_FAV':
			console.log('🐲🐲🐲 / file: reducer.js / line 74 / LOAD_FAV', payload);
			return { ...state, favourites: payload };

		case UPDATE_DB_CART:
			axios.put('/user/updateCart/' + payload, state.cart);
			return state;

		case 'UPDATE_DB_FAVOURITE':
			console.log('🐲🐲🐲 / file: reducer.js / line 82 / UPDATE_DB_FAVOURITE', payload);
			axios.put(`/user/updateFavourite/${payload}`, state.favourites);
			return state;

		case 'UPDATE_GLOBAL_FAVOURITE':
			console.log('REDUCER UPDATE_GLOBAL_FAVOURITE');
			return { ...state, favourites: payload };

		case ADD_ITEM_CART:
			const newItem = state.allEvents.find((event) => event.ID === payload);

			const itemInCart = state.cart.find((item) => item.ID === newItem.ID);
			console.log(itemInCart);
			return itemInCart
				? {
						...state,
						cart: state.cart.map((item) =>
							item.ID === newItem.ID ? { ...item, PurchasedItem: item.PurchasedItem + 1 } : item
						),
				  }
				: { ...state, cart: [...state.cart, { ...newItem, PurchasedItem: 1 }] };

		case REMOVE_ITEM_CART:
			const deleteItem = state.cart.find((item) => item.ID === payload);
			return deleteItem.PurchasedItem > 1
				? {
						...state,
						cart: state.cart.map((item) =>
							item.ID === payload ? { ...item, PurchasedItem: item.PurchasedItem - 1 } : item
						),
				  }
				: { ...state, cart: state.cart.filter((item) => item.ID !== payload) };

		case REMOVE_ALL_ITEM_CART:
			return { ...state, cart: state.cart.filter((item) => item.ID !== payload) };

		case CLEAR_CART:
			return { ...state, cart: [] };

		case CLEAR_DETAIL:
			return {
				...state,
				eventDetail: {},
			};

		case UPDATE_STATE_TRUE:
			return { ...state, loginState: true };

		case UPDATE_STATE_FALSE:
			return { ...state, loginState: false };

		case ADD_TO_FAVOURITES:
			const item = state.allEvents.find((event) => event.ID === payload);
			const itemFav = state.favourites.find((event) => event.ID === item.ID);
			return itemFav ? { ...state } : { ...state, favourites: [...state.favourites, item] };

		case REMOVE_FROM_FAVOURITES:
			const filterFav = state.favourites.filter((item) => item.ID !== payload);
			return { ...state, favourites: filterFav };

		case USER_DETAILS:
			return { ...state, userDetails: payload };

		case CLEAR_USER_DETAILS:
			return { ...state, userDetails: [] };

		case GET_USER_BY_ID2:
			return { ...state, userInfo: payload };

		// case SET_COORDS:
		// 	return { ...state, coords: payload };

		default:
			return state;
	}
}
