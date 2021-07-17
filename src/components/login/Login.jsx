//bundlesImports
import React from 'react'
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {useForm} from "react-hook-form";
//stylesImports
import "./formStyle.scss"



import {CustomField} from "../../utils/formUtils/CustomField";
import {signIn} from "../../store/reducers/authReducer";


let Input = CustomField('input')

const LoginForm = (props) => {
	const {register, handleSubmit, formState: {errors}, setError} = useForm()
	const onSubmit = (formData) => {
		// (()=>reset())()
		props.signIn(formData)
			.then((message) => {
				message !== undefined && setError("commonError", {
					type: "manual",
					message
				})
			})
	}

	if (props.isAuth) return <Redirect to={`/`}/>
	return (
		<div className={'formWrapper'}>
			<form onSubmit={handleSubmit(onSubmit)} className={'signIn'}>

				<div className="signIn__title">Sign in</div>

				<Input
					isLabel={true}
					name={'email'}
					useForm={{register, errors}}
					validate={{required: 'Field is required'}}
					fieldData={{type: 'email', id: 'email'}}
				/>

				<Input
					isLabel={true}
					name={'password'}
					useForm={{register, errors}}
					validate={{
						required: 'Field is required',
						minLength: {value: 6, message: 'Min length is 6'},
						maxLength: {value: 20, message: 'Min length is 20'}
					}}
					fieldData={{type: 'password', id: 'password'}}
				/>

				<Input
					isLabel={true}
					name={'rememberMe'}
					useForm={{register}}
					fieldData={{type: 'checkbox', id: 'rememberMe'}}
				/>

				<button {...register("commonError")} className="signIn__submit">Sign In</button>

				{errors.commonError &&
				<div className={"signIn__commonError"}>{errors.commonError?.message}</div>}

				{props.captchaUrl && <div className={"signIn__captcha"}>
					<img src={props.captchaUrl} alt=""/><br/>
					<input type={'text'} placeholder={'Captcha'} {...register("captcha")} />
				</div>}

			</form>
		</div>
	)
}

const Login = (props) => {
	return <LoginForm
		signIn={props.signIn}
		captchaUrl={props.captchaUrl}
		isAuth={props.isAuth}
	/>
}

let mapStateToProps = (state) => {
	return {
		isAuth: state.authReducer.isAuth,
		captchaUrl: state.authReducer.captchaUrl,
		ownId: state.authReducer.id
	}
}




export default connect(mapStateToProps, {signIn})(Login)


