import { useState } from 'react';
import { useAuth } from '../context/auth-context';
import './Auth.css';

function Login() {
	const { handleLogin } = useAuth();
	const initialLoginData = {
		email: '',
		password: ''
	};
	const [loginData, setLoginData] = useState(initialLoginData);

	const handleChange = e => {
		setLoginData({ ...loginData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async e => {
		e.preventDefault();
		await handleLogin(loginData);
	};

	return (
		<main className="flex-container ecom-main">
			<form
				className="form-container flex-container flex-column"
				onSubmit={handleSubmit}
			>
				<h1 className="text-xhuge form-heading">Login</h1>
				<div className="input-container">
					<label htmlFor="email"> Email </label>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="email@xyz.com"
						className="input text-md"
						value={loginData.email}
						onChange={handleChange}
					/>
				</div>

				<div className="input-container">
					<label htmlFor="password"> Password </label>
					<input
						type="password"
						name="password"
						id="password"
						className="input text-md"
						value={loginData.password}
						onChange={handleChange}
					/>
				</div>
				<div className="input-container input-wrap">
					<label htmlFor="remember" className="checkbox text-sm">
						<input
							type="checkbox"
							name="remember"
							id="remember"
							className="checkbox-input"
						/>
						<div className="checkbox-icon"></div>
						Remember me
					</label>
					<a href="./" className="form-link">
						Forgot Password?
					</a>
				</div>
				<button type="submit" className="btn rounded bg-blue">
					Login
				</button>
				<a href="./signup.html" className="form-link">
					Create an account
				</a>
			</form>
		</main>
	);
}

export default Login;
