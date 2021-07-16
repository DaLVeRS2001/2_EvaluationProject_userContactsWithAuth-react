import React from "react";

export const CustomField = (Element) => ({name, useForm, validate, fieldData, ...props}) => {
	const labelName = name.replace(/^./, x=>x.toUpperCase())

	return (
		<div className="signIn__field">
			<label htmlFor={name}>{labelName}</label>
			<input
				{...useForm.register(name, validate&&validate)}
				{...fieldData} {...props} autoComplete="on"
			/>
			<small>{useForm.errors?.[name]?.message}</small>
		</div>
	)
}

// name={'password'}
// useForm={{register, errors}}
// validate={{
// 	required: 'Field is required',
// 		minLength:{value: 6, message: 'Min length is 6'},
// 	maxLength: {value: 20, message: 'Min length is 20'}
// }}
// fieldData={{placeholder: '', type: '', id: '', className: ''}}