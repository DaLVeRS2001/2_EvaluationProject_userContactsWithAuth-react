import React from 'react'
import {Contacts} from "./Contacts";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

class ContactsContainer extends React.Component{

	render() {
		if (this.props.isAuth) return <Contacts/>
		return <Redirect to={'/login'}/>
	}
}

const mapStateToProps = (state) => {
	return {
		isAuth: state.authReducer.isAuth,
	}
}

export default connect(mapStateToProps, null)(ContactsContainer)