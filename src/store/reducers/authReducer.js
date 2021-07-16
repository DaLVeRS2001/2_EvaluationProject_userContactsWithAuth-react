import authApi from "../../api/authApi";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA',
	ADD_CAPTCHA = 'ADD_CAPTCHA',
	CLEAR_CAPTCHA = 'CLEAR_CAPTCHA'


const initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
	captchaUrl: null
}

const authReducer = (state=initialState, action) => {
	switch (action.type) {
		case SET_AUTH_USER_DATA:
			return {
				...state,
				...action.data
			}
		case ADD_CAPTCHA:
			return {
				...state,
				captchaUrl: action.url
			}
		case CLEAR_CAPTCHA:
			return {
				...state,
				captchaUrl: null
			}
		default:
			return state
	}
	// eslint-disable-next-line no-unreachable
	return state
}


//                                       ACTION CREATORS
const setAuthUserData = (id, email, login, isAuth) =>
		({type: SET_AUTH_USER_DATA, data: {id, email, login, isAuth}}),
	addCaptcha = (url) => ({type: ADD_CAPTCHA, url}),
	clearCaptcha = () => ({type: CLEAR_CAPTCHA})


//                                           THUNKS
export const getAuthData = () => (dispatch) => {
		return authApi.me()
			.then(response => {
				if (response.resultCode === 0) {
					let {id, email, login} = response.data
					dispatch(setAuthUserData(id, email, login, true))
				}
			})
	},
	signIn = (formData) => (dispatch) => {
		return authApi.login(formData)
			.then((response) => {
				if (response.resultCode === 0) {
					dispatch(getAuthData())
					dispatch(clearCaptcha())
				} else {
					let message = response.messages.length > 0 ? response.messages[0] : 'some error'
					response.resultCode === 10 &&
					authApi.getCaptcha()
						.then(response => {
							dispatch(addCaptcha(response.url))
						})
					return message
				}
			})
	},


	signOut = () => (dispatch) => {
		console.log('fadsfasd')
		authApi.logout()
			.then((response) => {
				if (response.resultCode === 0) {
					dispatch(setAuthUserData(null, null, null, false))
				}
			})
	}


export default authReducer