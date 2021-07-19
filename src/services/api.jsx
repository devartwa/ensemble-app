import AsyncStorage from '@react-native-async-storage/async-storage';

const baseUrl = 'https://job.ensemble.com.br/api';

const request = async (method, endpoint, params) => {
	method = method.toLowerCase();
	let fullUrl = `${baseUrl}${endpoint}`;
	let body = null;

	switch (method) {
		case 'get':
			let queryString = new URLSearchParams(params).toString();
			fullUrl += `?${queryString}`;
			break;
		case 'post':
		case 'put':
		case 'delete':
			body = JSON.stringify(params);
			break;
	}

	let headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'ens-api-token': 'D7JB1eDRI8mW9Uqbkx3W',
  };

	const token = await AsyncStorage.getItem('@ensemble:token');

	if(token) {
		headers['ens-auth-token'] = `${token}`
	}

	let req = await fetch(fullUrl, { method, headers, body });
	let json = await req.json();
	return json;
}

export default {
	login: async (username, password) => {
		let json = await request('post', '/auth', {
			username,
			password,
		});
		return json;
	},
	feed: async () => {
		let json = await request('get', `/feed?startSeq=100&limit=100&order=desc`, {});
		return json;
	},
	sendMessage: async (message) => {
		let json = await request('post', '/feed', { message })
		return json;
	}
}