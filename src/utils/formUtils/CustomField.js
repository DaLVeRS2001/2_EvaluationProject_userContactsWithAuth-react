import React from "react";

export const CustomField = (Element) => ({isLabel, name, useForm, validate, fieldData, ...props}) => {
	const labelName = isLabel && name.replace(/^./, x=>x.toUpperCase())

	return (
		<div className="signIn__field">
			{isLabel && <label htmlFor={name}>{labelName}</label>}
			<Element
				{...useForm.register(name, validate&&validate)}
				{...fieldData} {...props} autoComplete="on"
			/>
			{validate && <small>{useForm.errors?.[name]?.message}</small>}
		</div>
	)
}



// name={'password'}
//	isLabel={true or false}
// useForm={{register, errors}}
// validate={{
// 	required: 'Field is required',
// 		minLength:{value: 6, message: 'Min length is 6'},
// 	maxLength: {value: 20, message: 'Min length is 20'}
// }}
// fieldData={{placeholder: '', type: '', id: '', className: ''}}