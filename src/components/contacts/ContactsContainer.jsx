import React, {createRef} from 'react'
import {Contacts} from "./Contacts";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {signOut} from "../../store/reducers/authReducer";
import {addContact, getContacts, removeContact} from "../../store/reducers/contactsReducer";
import Preloader from "../#common/Preloader/Preloader";
import ContactModal from "./contactModal/ContactModal";

class ContactsContainer extends React.Component{
	state = {
		isModalOpen: false
	}
	componentDidMount() {
		if(this.props.isAuth){
			this.props.getContacts()
		}
	}

	removeHandler = (id) => {
		this.props.removeContact(id)
	}
	addHandler = (contact) => {
		this.props.addContact(contact)
	}
	updateHandler = (id, modifiedContact) => {
		this.props.updateContact(id, modifiedContact)
	}
	openModal = (isOpen, mode) => {
		this.setState({isModalOpen: isOpen})
	}

	render() {
		if (this.props.isAuth) {
			if(this.props.contacts.length){
				return <>
					{this.state.isModalOpen && <ContactModal openModal={this.openModal} />}
					<Contacts
						signOut={this.props.signOut}
						removeContact={this.removeHandler}
						addContact={this.addHandler}
						updateContact={this.updateHandler}
						contacts={this.props.contacts}
						openModal={this.openModal}
					/>
				</>
			}
			return <Preloader/>
		}
		return <Redirect to={'/login'}/>
	}
}

const mapStateToProps = (state) => {
	return {
		isAuth: state.authReducer.isAuth,
		contacts: state.contactsReducer.contacts
	}
}

export default connect(mapStateToProps, {signOut, getContacts, addContact, removeContact})(ContactsContainer)