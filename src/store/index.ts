import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/authSlice";
import orderSlice from "./reducers/orderSlice";

const store = configureStore({
	reducer: {
		orders: orderSlice,
		auth: authSlice
	}
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;