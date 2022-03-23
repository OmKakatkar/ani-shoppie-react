import './Auth.css';

function Login() {
	return (
		<main className="flex-container ecom-main">
			<div className="form-container flex-container flex-column">
				<h1 className="text-xhuge form-heading">Login</h1>
				<div className="input-container">
					<label htmlFor="email"> Email </label>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="email@xyz.com"
						className="input text-md"
					/>
				</div>

				<div className="input-container">
					<label htmlFor="password"> Password </label>
					<input
						type="password"
						name="password"
						id="password"
						className="input text-md"
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
					<a href="#" className="form-link">
						Forgot Password?
					</a>
				</div>
				<button type="submit" className="btn rounded bg-blue">
					Login
				</button>
				<a href="./signup.html" className="form-link">
					Create an account
				</a>
			</div>
		</main>
	);
}

export default Login;
