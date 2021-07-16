import React from 'react'
import s from './header.module.scss'
import logout from  '../../assets/images/icons/logout.png'

const Header = (props) => {

	return <header>
		<div className={s.header__title}>React contacts</div>
		<img onClick={props.signOut} src={logout} alt="nothing"/>
	</header>
}

export default Header