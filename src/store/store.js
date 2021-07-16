import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import appReducer from "./reducers/appReducer";
import authReducer from "./reducers/authReducer";
import {reducer as formReducer} from "redux-form"
import contactsReducer from "./reducers/contactsReducer";





let reducers = combineReducers({
	appReducer,
	authReducer,
	form: formReducer,
	contactsReducer
})
	let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store