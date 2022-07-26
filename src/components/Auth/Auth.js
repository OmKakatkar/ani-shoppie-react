import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

function Auth() {
	const { user } = useAuth();
	const location = useLocation();

	if (user.token) {
		return <Navigate replace to="/" state={{ path: location.pathname }} />;
	}

	return <Outlet />;
}
export default Auth;
