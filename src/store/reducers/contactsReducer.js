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
		contactsApi.getContacts()
			.then(contacts => {
				dispatch(setContacts(contacts))
				dispatch(setFilteredContacts)

			})
	},
	addContact = (contact) => (dispatch) => {
		contactsApi.addContact(contact)
			.then(() => dispatch(getContacts()))
	},
	removeContact = (id) => (dispatch) => {
		contactsApi.removeContact(id)
			.then(() => dispatch(getContacts()))
	},
	updateContact = (id, modifiedContact) => (dispatch) => {
		contactsApi.updateContact(id, modifiedContact)
			.then(() => dispatch(getContacts()))
	},
	addSearchValue = (value) => (dispatch) => {
		dispatch(setSearchValue(value))
		dispatch(setFilteredContacts)
	}





export default contactsReducer