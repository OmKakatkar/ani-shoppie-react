import axios from 'axios';
import { API_LOGIN, API_SIGNUP } from '../constants/api-constants';

/*
 *  Login and SignUp functions to communicate with mock backend
 */

const login = async ({ email, password }) =>
	await axios.post(API_LOGIN, {
		email,
		password
	});

const signup = async ({ name, email, password }) =>
	await axios.post(API_SIGNUP, {
		name,
		email,
		password
	});

export { login, signup };
