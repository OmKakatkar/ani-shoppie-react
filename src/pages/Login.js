import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import "./Auth.css";

export const Login = () => {
	const initialLoginData = {
		email: "",
		password: "",
	};
	const guestCredentials = {
		email: "testuser@gmail.com",
		password: "test123",
	};

	const { handleLogin } = useAuth();
	const [loginData, setLoginData] = useState(initialLoginData);
	const [isLoginRemember, setIsLoginRemember] = useState(false);

	const handleChange = (e) => {
		console.log(e.target.value);
		setLoginData({ ...loginData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await handleLogin(loginData, isLoginRemember);
	};

	const handleGuestLogin = async (e) => {
		setLoginData(guestCredentials);
		setIsLoginRemember(true);
	};

	return (
		<main className="flex-container ecom-main">
			<div className="form-container">
				<form className="flex-container flex-column" onSubmit={handleSubmit}>
					<h1 className="text-xhuge form-heading">Login</h1>
					<div className="input-container">
						<label htmlFor="email"> Email </label>
						<input
							type="email"
							name="email"
							id="email"
							autoComplete="username"
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
							autoComplete="current-password"
							className="input text-md"
							value={loginData.password}
							onChange={handleChange}
						/>
					</div>
					<div className="input-container input-wrap">
						<label htmlFor="isLoginRemember" className="checkbox text-sm">
							<input
								type="checkbox"
								name="isLoginRemember"
								id="isLoginRemember"
								className="checkbox-input"
								checked={isLoginRemember}
								onChange={() =>
									setIsLoginRemember(
										(currentIsLoginRemember) => !currentIsLoginRemember
									)
								}
							/>
							<div className="checkbox-icon"></div>
							Remember me
						</label>
						{/* <Link to="/password-reset" className="form-link">
							Forgot Password?
						</Link> */}
					</div>
					<button
						type="submit"
						className="btn rounded bg-blue"
						disabled={!loginData.email || !loginData.password}
					>
						Login
					</button>
				</form>
				<button
					type="submit"
					className="btn rounded bd-blue"
					onClick={handleGuestLogin}
				>
					Guest Login
				</button>
				<Link to="/signup" className="form-link">
					Create an account
				</Link>
			</div>
		</main>
	);
};
