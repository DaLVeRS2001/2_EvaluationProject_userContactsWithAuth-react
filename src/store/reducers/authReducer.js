import authApi from "../../api/authApi";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA',
	ADD_CAPTCHA = 'ADD_CAPTCHA',
	CLEAR_CAPTCHA = 'CLEAR_CAPTCHA'


const initialState = {
	id: null,
	email: null,
	login: null,
	password: null,
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
}


//                                       ACTION CREATORS
const setAuthUserData = (id, email, login, password, isAuth) =>
		({type: SET_AUTH_USER_DATA, data: {id, email, login, password, isAuth}}),
	addCaptcha = (url) => ({type: ADD_CAPTCHA, url}),
	clearCaptcha = () => ({type: CLEAR_CAPTCHA})


//                                           THUNKS
export const getAuthData = () => (dispatch) => {
	localStorage.removeItem('credentials')
	const fakeCredentials = JSON.stringify({id: 1, email:'hewxzz@yandex.ru', login:'hewxzz@yandex.ru', password: 'hewxzz'})
	localStorage.setItem('credentials', fakeCredentials)
	const isAuth = localStorage.getItem('isAuth') === 'true'
	if(isAuth) {
		const fakeCredentials = JSON.parse(localStorage.getItem('credentials'))
		dispatch(setAuthUserData(fakeCredentials.id, fakeCredentials.email, fakeCredentials.login, fakeCredentials.password, true ))
	} 
	},
	signIn = (formData) => (dispatch) => {
		const fakeCredentials = JSON.parse(localStorage.getItem('credentials'))
		const matchedEmail = formData.email === fakeCredentials.email
		const matchedPassword = formData.password === fakeCredentials.password
		console.log(fakeCredentials, formData, matchedEmail, matchedPassword)
		if(matchedEmail && matchedPassword) {
			localStorage.setItem('isAuth', true)
			dispatch(setAuthUserData(fakeCredentials.id, fakeCredentials.email, fakeCredentials.login, fakeCredentials.password, true ))
		}
	},
	signOut = () => (dispatch) => {
		localStorage.setItem('isAuth', false)
		dispatch(setAuthUserData(null, null, null, null, false))
	}


export default authReducer