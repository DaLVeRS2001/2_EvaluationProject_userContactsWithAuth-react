import * as axios from "axios";

const instance = axios.create({
	withCredentials: true,
	headers: {'API-KEY': '655c325f-f4b3-44cd-8c93-20f2b75dddb0'},
	baseURL: 'https://social-network.samuraijs.com/api/1.0'
})

export default instance
