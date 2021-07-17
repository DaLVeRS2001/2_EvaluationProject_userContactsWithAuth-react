import React from 'react'
import s from './Contacts.module.scss'
import Header from "../header/Header";
import pencil from '../../assets/images/icons/pencil.png'
import basket from '../../assets/images/icons/basket.png'

export const Contacts = (props) => {
	const tableHeaders = ['Icon', 'Name', 'Email', 'Phone', 'Job', 'Company'],
		contacts = props.contacts
	if(contacts.length){

	}


	return <div className={s.contacts}>
		<Header
			searchValue={props.searchValue}
			addSearchValue={props.addSearchValue}
			signOut={props.signOut}
		/>
		<main>
			<table>
				<thead>
				<tr>
					{
						tableHeaders.map(header => {
							return <th key={header}>{header}</th>
						})
					}
				</tr>
				</thead>
				<tbody>
				{
					props.filteredContacts.map((contact) => {
						const firstLetters = contact.name.split(" ").map((i) => i[0]).join('')
						//цикл в цикле не круто, но я думаю от этого не будет много проблем
						return (
							<tr key={contact.id}>
								<td>
									<div className={s.contacts__ava}>{firstLetters}</div>
								</td>
								<td>{contact.name}</td>
								<td>{contact.email}</td>
								<td>{contact.phone}</td>
								<td>{contact.job}</td>
								<td>{contact.company}</td>
								<td>
									<div className={s.contacts__manipulation}>
										<img
											onClick={() => props.openModal(true, 'put', contact.id)}
											src={pencil} alt="nothing"
										/>
										<img
											id={'remove'} src={basket} alt="nothing"
											onClick={props.removeContact.bind(null, contact.id)}
										/>
									</div>
								</td>
							</tr>
						)
					})
				}
				</tbody>
			</table>
			<div
				onClick={() => props.openModal(true, 'post')}
				className={s.contacts__contactModalToggle}
			>
				<span>+</span>
			</div>
		</main>
	</div>
}
