import s from "./ContactModal.module.scss"
import React from "react";
import ContactForm from "../contactForm/ContactForm";


const ContactModal = (props) => {
	return (
		<div
			onClick={(e) =>
				e.target === e.currentTarget && props.openModal(false)
			}
			className={s.modal}
		>
			<div className={s.modal__content}>
				<header className={s.modal__header}>Create contact</header>
				<main>
					<ContactForm
						vpWidth={props.vpWidth}
						contactId={props.contactId}
						openModal={props.openModal}
						modalType={props.modalType}
						handleContact={props.handleContact}
						contacts={props.contacts}
					/>
				</main>
			</div>
		</div>
	)
}
export default ContactModal