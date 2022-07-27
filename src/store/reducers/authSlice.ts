import { IUserData } from "models";
import { createSlice } from "@reduxjs/toolkit";
import { userDataLS } from "localStorage";

const defaultState: IUserData = {
	isAuth: false
};

const initialState = userDataLS.get() || defaultState;

const ordersSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login(state) {
			state.isAuth = true;
			userDataLS.set(state);
		},
		logout(state) {
			state.isAuth = false;
			userDataLS.set(state);
		},
	}
});

export const { login, logout } = ordersSlice.actions;
export default ordersSlice.reducer;