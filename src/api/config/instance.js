import * as axios from "axios";

const instance = axios.create({
	withCredentials: true,
	headers: {'API-KEY': '7e2aacc9-f32a-4ca9-b1d4-7577f4432c28'},
	baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export default instance