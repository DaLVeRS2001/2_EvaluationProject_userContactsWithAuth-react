
import axios from "axios";

const baseUrl ='http://localhost:8080/'

const contactsApi = {
	getContacts(){
		return axios.get(baseUrl+'contacts')
			.then(response=> response.data)
	},
	addContact(contact){
		return axios.post(baseUrl+'contacts', contact)
	},
	removeContact(id){
		return axios.delete(baseUrl+'contacts/'+id)
	},
	updateContact(id, modifiedContact){
		return axios.put(baseUrl+'contacts/'+id, modifiedContact)
	}
}

export default contactsApi