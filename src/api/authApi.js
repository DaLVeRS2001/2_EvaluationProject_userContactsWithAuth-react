import instance from "./config/instance";

const authApi = {
	me(){
		return instance.get('auth/me')
			.then(response=> response.data)
	},
	login(formData){
		return instance.post('auth/login', formData)
			.then((response)=> response.data)
	},
	logout(){
		return instance.delete('auth/login')
			.then((response)=> response.data)
	},
	getCaptcha(){
		return instance.get('security/get-captcha-url')
			.then((response)=> response.data)
	}
}

export default authApi