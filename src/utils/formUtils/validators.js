export const required = (val) => {
		if (val) return undefined
		return 'Field is required'
	},
	maxLength = (length) => (val) => {
		if (val.length > length) return `Max length is ${length}`
		return undefined
	},
	minLength = (length) => (val) => {
		if (val.length < length) return `Min length is ${length}`
		return undefined
	}