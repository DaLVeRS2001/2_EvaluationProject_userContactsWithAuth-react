import React from 'react'
import s from './Contacts.module.scss'
import Header from "../header/Header";
import pencil from '../../assets/images/icons/pencil.png'
import basket from '../../assets/images/icons/basket.png'

export const Contacts = (props) => {
	const tableHeaders = ['Name', 'Email', 'Phone', 'Job', 'Company']


	console.log(props)
	return <div className={s.contacts}>
		<Header signOut={props.signOut}/>
		<main>
			<table>
				<thead>
				<tr>
					<th>
						Icon
					</th>
					{
						tableHeaders.map(header => {
							return <th key={header}>{header}</th>
						})
					}
				</tr>
				</thead>
				<tbody>
				{
					props.contacts.map(contact=> {
						const firstLetters = contact.name.split(" ").map((i) => i[0]).join('')
						//цикл в цикле не круто, но я думаю от этого не будет много проблем
						return (
							<tr key={contact.name}>
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
										<img onClick={props.updateContact.bind(null, contact.id, contact)} src={pencil} alt="nothing"/>
										<img onClick={props.removeContact.bind(null, contact.id)} src={basket} alt="nothing"/>
									</div>
								</td>
							</tr>
						)
					})
				}
				</tbody>
			</table>


			<div onClick={()=> props.openModal(true)} className={s.contacts__contactModalToggle}>
				<span>+</span>
			</div>
		</main>
	</div>
}


// {props.contacts.map(i=>{
// 	return (
// 		<div>
// 			<span>{i.name} </span>
// 			<button onClick={handler2.bind(null, i.id)}>Remove {i.name}</button>
// 		</div>
// 	)
// })}
// <button onClick={handler}>SET</button>

