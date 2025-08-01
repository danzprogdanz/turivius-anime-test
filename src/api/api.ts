import axios from "axios"

const baseURL = "https://kitsu.io/api/edge";

const api = axios.create({
	baseURL: baseURL,
	headers: {
		"Content-Type": 'application/vnd.api+json'
	}
});

export default api;