import s from "./Table.module.scss";
import pencil from "../../../../assets/images/icons/pencil.png";
import basket from "../../../../assets/images/icons/basket.png";
import React from "react";

const MobileTable = (props) => {
	const tableHeaders = ['Icon', 'Name', 'Email', 'Phone', 'Job', 'Company'],
		contactTypes = tableHeaders.map(header => header.toLowerCase())
	//цикл в цикле не круто, но я думаю от одного раза не будет много проблем
	return (
		<table className={s.mobileTable}>
			{
				props.filteredContacts.map((contact) => {
					const firstLetters = contact.name.split(" ").map((i) => i[0]).join('')
					return (
						<tbody key={contact.id} className={s.mobileTable__tbody}>
						{
							tableHeaders.map((header, idx) => {
								return (
									<tr key={header} className={s.mobileTable__tr}>
										<th >{header}</th>
										{idx === 0 && <td className={s.contacts__ava}>
											<div>{firstLetters}</div>
										</td>}
										<td>{contact[contactTypes[idx]]}</td>
										<td>
											{idx === 0 && <div className={s.contacts__manipulation}>
												<img
													onClick={() => props.openModal(true, 'put', contact.id)}
													src={pencil} alt="nothing"
												/>
												<img
													id={'remove'} src={basket} alt="nothing"
													onClick={props.removeContact.bind(null, contact.id)}
												/>
											</div>}
										</td>
									</tr>
								)
							})
						}
						<hr/>
						</tbody>
					)
				})
			}
		</table>
	)
}



export default MobileTable