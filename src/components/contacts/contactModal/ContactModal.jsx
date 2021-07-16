import s from "./ContactModal.module.scss"
import {useForm} from "react-hook-form";
const ContactModal = (props) => {
	const {handleSubmit, formState: {errors}, register} = useForm()
	const onSubmit = (data) => {
		console.log(data)
	}

	return (
		<div
			onClick={(e)=>
					e.target === e.currentTarget && props.openModal(false)
			}
			className={s.modal}
		>
			<div className={s.modal__content}>
				<header className={s.modal__header}>Create contact</header>
				<main className={s.modal__body}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<input  placeholder="Name" type="text" id="firstName" {...register("firstName", {
							required: 'Field is required',
							maxLength: {value: 15, message: 'Max length is 15'},
							minLength: {value: 3, message: 'Min length is 3'},
							pattern: {value: /^[a-zA-Zа-яА-Я]+[a-zA-Zа-яА-Я]$/, message: 'Only letters'}
						})}/>
						<small>{errors.firstName?.message}</small>

						<input placeholder="Surname" type="text" id="lastName" {...register("lastName", {
							required: 'Field is required',
							maxLength: {value: 15, message: 'Max length is 15'},
							minLength: {value: 3, message: 'Min length is 3'},
							pattern: {value: /^[a-zA-Zа-яА-Я]+[a-zA-Zа-яА-Я]$/, message: 'Only letters'}
						})}/>
						<small>{errors.lastName?.message}</small>

						<input placeholder="Company" type="text" id="company" {...register("company", {
							required: 'Field is required',
						})}/>
						<small>{errors.company?.message}</small>

						<input placeholder="Job" type="text" id="job" {...register("job", {
							required: 'Field is required',
						})}/>
						<small>{errors.job?.message}</small>

						<input placeholder="+7(910)-221-22-22" type="text" id="phone" {...register("phone", {
							required: 'Field is required',
							pattern: {value: /^\+?[78][-(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/, message: 'Number is not correct'},
						})}/>
						<small>{errors.phone?.message}</small>

						<input placeholder="Email" type="email" id="email" {...register("email", {
							required: 'Field is required',
						})}/>
						<small>{errors.email?.message}</small>


						<button>Send</button>
					</form>
				</main>
			</div>
		</div>
	)
}

export default ContactModal