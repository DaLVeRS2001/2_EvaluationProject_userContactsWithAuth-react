import React from "react";

export const CustomField = (Element) => ({isLabel, name, useForm, validate, fieldData, ...props}) => {
	const labelName = isLabel && name.replace(/^./, x=>x.toUpperCase())

	return (
		<div data-field={'field'} className="signIn__field">
			{isLabel && <label htmlFor={name}>{labelName}</label>}
			<Element
				data-error={useForm.errors?.[name] && 'fieldError'}
				{...useForm.register(name, validate&&validate)}
				{...fieldData} {...props} autoComplete="on"
			/>
			{validate && <small style={{color: 'red'}}>{useForm.errors?.[name]?.message}</small>}
		</div>
	)
}



// name={'password'}
// 	isLabel={true or false}
// useForm={{register, errors}}
// validate={{
// 	required: 'Field is required',
// 		minLength:{value: 6, message: 'Min length is 6'},
// 	maxLength: {value: 20, message: 'Min length is 20'}
// }}
// fieldData={{placeholder: '', type: '', id: '', className: ''}}