import contactsApi from "../../api/contactsApi";

const SET_CONTACTS = 'SET_CONTACTS',
	ADD_NEW_CONTACTS = 'ADD_NEW_CONTACTS'

const initialState = {
	contacts: []
}

//                                     	 REDUCER
const contactsReducer = (state=initialState, action) => {
	switch (action.type){
		case SET_CONTACTS:
			return {
				...state,
				contacts: [...action.contacts]
			}
		default:
			return state
	}
}


//                                  		ACTIONS CREATORS
const setContacts = (contacts) => ({type: SET_CONTACTS, contacts})


//                                          THUNKS
export const getContacts = () => (dispatch) => {
	contactsApi.getContacts()
		.then(contacts=> dispatch(setContacts(contacts)))
},
	addContact = (contact) => (dispatch) => {
		contactsApi.addContact(contact)
			.then(()=> dispatch(getContacts()))
	},
	removeContact = (id) => (dispatch) => {
		contactsApi.removeContact(id)
			.then(()=> dispatch(getContacts()))
	},
	updateContact = (id, modifiedContact) => (dispatch) => {
		contactsApi.updateContact(id, modifiedContact)
			.then(()=> dispatch(getContacts()))
	}





export default contactsReducer