import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";
import filterReducer from "./reducers/filterSlice";
import goodReducer from "./reducers/goodSlice";
import orderReducer from "./reducers/orderSlice";
import pageReducer from "./reducers/pageSlice";

const store = configureStore({
	reducer: {
		goods: goodReducer,
		orders: orderReducer,
		auth: authReducer,
		page: pageReducer,
		filter: filterReducer
	}
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;