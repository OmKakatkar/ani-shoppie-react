import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import "./Auth.css";

export const SignUp = () => {
	const initialSignUpData = {
		name: "",
		email: "",
		password: "",
	};
	const { handleSignUp } = useAuth();
	const [signUpData, setSignUpData] = useState(initialSignUpData);
	const [acceptTnC, setAcceptTnC] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		await handleSignUp(signUpData);
	};

	const handleChange = (e) => {
		setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
	};

	return (
		<main className="flex-container ecom-main">
			<form
				className="form-container flex-container flex-column"
				onSubmit={handleSubmit}
			>
				<h1 className="text-xhuge form-heading">Sign Up</h1>
				<div className="input-container">
					<label htmlFor="name"> Name </label>
					<input
						type="text"
						name="name"
						id="name"
						placeholder="John Doe"
						className="input text-md"
						value={signUpData.name}
						onChange={handleChange}
					/>
				</div>
				<div className="input-container">
					<label htmlFor="email"> Email </label>
					<input
						type="email"
						name="email"
						id="email"
						autoComplete="username"
						placeholder="johndoe@gmail.com"
						className="input text-md"
						value={signUpData.email}
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
						value={signUpData.password}
						onChange={handleChange}
					/>
				</div>
				<div className="input-container">
					<label htmlFor="remember" className="checkbox text-xsm">
						<input
							type="checkbox"
							name="remember"
							id="remember"
							className="checkbox-input"
							checked={acceptTnC}
							onChange={() =>
								setAcceptTnC((currentAcceptTnC) => !currentAcceptTnC)
							}
						/>
						<div className="checkbox-icon"></div>I accept all Terms & Conditions
					</label>
				</div>
				<button
					type="submit"
					className="btn rounded bg-blue"
					disabled={
						!signUpData.name ||
						!signUpData.email ||
						!signUpData.password ||
						!acceptTnC
					}
				>
					Create New Account
				</button>
				<Link to="/login" className="form-link">
					Already have an account
				</Link>
			</form>
		</main>
	);
};
