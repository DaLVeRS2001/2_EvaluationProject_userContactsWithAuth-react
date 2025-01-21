import contactsApi from "../../api/contactsApi";

const SET_CONTACTS = 'SET_CONTACTS',
	SET_SEARCH_VALUE = 'SET_SEARCH_VALUE',
	SET_FILTERED_CONTACTS = 'SET_FILTERED_CONTACTS';

const initialState = {
	contacts: [],
	searchValue: '',
	filteredContacts: []
}

//                                     	 REDUCER
const contactsReducer = (state=initialState, action) => {
	switch (action.type){
		case SET_CONTACTS:
			return {
				...state,
				contacts: [...action.contacts]
			}
		case SET_SEARCH_VALUE:
			return {
				...state,
				searchValue: action.searchValue
			}
		case SET_FILTERED_CONTACTS:
			return {
				...state,
				filteredContacts: state.contacts.filter(contact=>
					Object.values(contact).join(' ').includes(state.searchValue))
			}
		default:
			return state
	}
}


//                                  		ACTIONS CREATORS
const setContacts = (contacts) => ({type: SET_CONTACTS, contacts}),
	setSearchValue = (searchValue) => ({type: SET_SEARCH_VALUE, searchValue}),
	setFilteredContacts = {type: SET_FILTERED_CONTACTS}


//                                          THUNKS
export const getContacts = () => (dispatch) => {
	const contacts = JSON.parse(localStorage.getItem('contacts'))?.map(el=> JSON.parse(el)) ?? []
	dispatch(setContacts(contacts))
	dispatch(setFilteredContacts)
	},
	addContact = (contact) => (dispatch) => {
		const contacts = JSON.parse(localStorage.getItem('contacts'))?.map(el=> JSON.parse(el)) ?? []
		const stringified = [...contacts, contact].map(el => JSON.stringify(el))
		localStorage.setItem('contacts', JSON.stringify(stringified))
		dispatch(getContacts())
	},
	removeContact = (id) => (dispatch) => {
		const contacts = JSON.parse(localStorage.getItem('contacts'))?.map(el=> JSON.parse(el)).filter(el=> el.id !== id)
		const stringified = contacts.map(el => JSON.stringify(el))
		localStorage.setItem('contacts', JSON.stringify(stringified))
		dispatch(getContacts())
	},
	updateContact = (id, modifiedContact) => (dispatch) => {
		const contacts = JSON.parse(localStorage.getItem('contacts'))?.map(el=> JSON.parse(el))
		const contactIndex = contacts.findIndex(el=> el.id === id)
		contacts.splice(contactIndex, 1, modifiedContact)
		const stringified = contacts.map(el => JSON.stringify(el))
		localStorage.setItem('contacts', JSON.stringify(stringified))
		dispatch(getContacts())
	},
	addSearchValue = (value) => (dispatch) => {
		dispatch(setSearchValue(value))
		dispatch(setFilteredContacts)
	}





export default contactsReducer