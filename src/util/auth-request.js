import axios from 'axios';

/*
 *  Login and SignUp functions to communicate with mock backend
 */

const login = async ({ email, password }) =>
	await axios.post('/api/auth/login', {
		email,
		password
	});

const signup = async ({ name, email, password }) =>
	await axios.post('/api/auth/signup', {
		name,
		email,
		password
	});

export { login, signup };
