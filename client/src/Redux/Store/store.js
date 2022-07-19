import reducer from "../Reducer/reducer";
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import {createStore, applyMiddleware} from "redux"

const store= createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))

export default store
