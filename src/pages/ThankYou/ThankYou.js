import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import './ThankYou.css'

export const ThankYou = () => {
	const [timer, setTimer] = useState(5);
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		let timerId;
		timerId = setTimeout(() => setTimer((currTimer) => currTimer - 1), 1000);
		if (timer <= 0) {
			navigate("/products", { replace: true });
		}
		return () => clearTimeout(timerId);
	}, [timer, navigate]);

	return location.state?.path === "/order-summary" ? (
		<div className="text-center text-huge flex-container thank-you-container">
			Thank You for buying from us... You will be redirected in {timer}
		</div>
	) : (
		<Navigate to={"/products"} />
	);
};
