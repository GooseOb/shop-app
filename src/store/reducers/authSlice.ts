import { IUserData } from "../../models";
import { createSlice } from "@reduxjs/toolkit";
import { userDataLS } from "../../localStorage";

const defaultState: IUserData = {
	isAuth: false
};

const initialState = userDataLS.get() || defaultState;

const ordersReducer = createSlice({
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

export const { login, logout } = ordersReducer.actions;
export default ordersReducer.reducer;