import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/authSlice";
import orderSlice from "./reducers/orderSlice";
import pageSlice from "./reducers/pageSlice";

const store = configureStore({
	reducer: {
		orders: orderSlice,
		auth: authSlice,
		page: pageSlice
	}
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;