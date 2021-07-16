import {getAuthData} from "./authReducer";


const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'


const initialState = {
	initialized: false,
}

const appReducer = (state=initialState, action) => {
	switch (action.type) {
		case INITIALIZED_SUCCESS:
			return {
				...state,
				initialized: true
			}
		default:
			return state
	}

	// eslint-disable-next-line no-unreachable
	return state
}


//                                       ACTION CREATORS
const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})


//                                           THUNKS
export const initializeApp = () => (dispatch) => {
	let promise = dispatch(getAuthData())
	Promise.all([promise]).then(()=> {
		dispatch(initializedSuccess())
	})

	return promise
}


export default appReducer