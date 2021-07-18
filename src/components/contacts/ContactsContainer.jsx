import React from 'react'
import {Contacts} from "./Contacts";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {signOut} from "../../store/reducers/authReducer";
import {
	addContact,
	addSearchValue,
	getContacts,
	removeContact,
	updateContact
} from "../../store/reducers/contactsReducer";
import ContactModal from "./#common/contactModal/ContactModal";

class ContactsContainer extends React.Component{
	state = {
		isModalOpen: false,
		modalType: null,
		contactId: null,
		vpWidth: 0
	}

	componentDidMount() {
		this.setState({vpWidth: window.innerWidth})
		this.props.getContacts()
		window.addEventListener('resize', (e) => {
			this.setState({vpWidth: e.target.innerWidth})
		})
	}


	handleContact = (data) =>{
		this.state.modalType === 'post' && this.props.addContact(data)
		this.state.modalType === 'put' && this.props.updateContact(this.state.contactId, data)
	}

	openModal = (isOpen, type, id) => {
		this.setState({isModalOpen: isOpen, modalType: type, contactId: id})

	}

	render() {
		if (this.props.isAuth) {
				return <>
					{this.state.isModalOpen && <ContactModal
						vpWidth={this.state.vpWidth}
						contactId={this.state.contactId}
						handleContact={this.handleContact}
						openModal={this.openModal}
						modalType={this.state.modalType}
						contacts={this.props.contacts}
					/>}
					<Contacts
						vpWidth={this.state.vpWidth}
						searchValue={this.props.searchValue}
						addSearchValue={this.props.addSearchValue}
						signOut={this.props.signOut}
						removeContact={this.props.removeContact}
						openModal={this.openModal}
						filteredContacts={this.props.filteredContacts}
					/>
				</>

		}
		return <Redirect to={'/login'}/>
	}
}

const mapStateToProps = (state) => {
	return {
		isAuth: state.authReducer.isAuth,
		contacts: state.contactsReducer.contacts,
		searchValue: state.contactsReducer.searchValue,
		filteredContacts: state.contactsReducer.filteredContacts
	}
}
export default connect(
	mapStateToProps,
	{
		signOut, getContacts, addContact, removeContact, updateContact, addSearchValue
	})(ContactsContainer)