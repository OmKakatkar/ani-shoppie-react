import './Auth.css'

function SignUp() {
	return (
		<main className="flex-container ecom-main">
			<form className="form-container flex-container flex-column">
				<h1 className="text-xhuge form-heading">Sign Up</h1>
				<div className="input-container" >
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
				<div className="input-container">
					<label htmlFor="remember" className="checkbox text-xsm">
						<input
							type="checkbox"
							name="remember"
							id="remember"
							className="checkbox-input"
						/>
						<div className="checkbox-icon"></div>I accept all Terms & Conditions
					</label>
				</div>
				<button type="submit" className="btn rounded bg-blue">
					Create New Account
				</button>
				<a href="./login.html" className="form-link">
					Already have an account
				</a>
			</form>
		</main>
	);
}

export default SignUp;
