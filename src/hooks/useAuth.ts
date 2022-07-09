import { useState, useCallback, useEffect } from "react";
import { IAuthApi } from "../context/Auth";
import userDataLS from "../localStorage/userDataLS";
import store from "../store";
import { cleanOrders } from "../store/reducers/orderSlice";

const useAuth = (): IAuthApi => {
	const [isAuth, setAuth] = useState(false);

	const login = useCallback(() => {
		setAuth(true);

		userDataLS.set({isAuth: true});
	}, []);

	const logout = useCallback(() => {
		setAuth(false);

		userDataLS.set({isAuth: false});
		store.dispatch(cleanOrders());
	}, []);

	useEffect(() => {
		const data = userDataLS.get();
	
		if (data && data.isAuth) login();
	}, [login]);

	return {
		login,
		logout,
		isAuth
	};
};

export default useAuth;