import { IGood, IOrder, IOrdersData } from "../../models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import getRandomValue from "../../getRandomValue";
import ordersLS from "../../localStorage/ordersLS";

const defaultState: IOrdersData = {
	list: [],
	totalPrice: 0
};

const initialState = ordersLS.get() || defaultState;

const ordersReducer = createSlice({
	name: 'orders',
	initialState,
	reducers: {
		cleanOrders(state: IOrdersData) {
			Object.assign(state, defaultState);
			ordersLS.set(state);
		},
		addOrder(state: IOrdersData, action: PayloadAction<IGood>) {
			const payload = {...action.payload as IOrder};
			const order = state.list.find(order => order.ID === payload.id);
			if (order) {
				order.quantity++;
			} else {
				payload.quantity = 1;
				payload.ID = payload.id;
				payload.id = getRandomValue();
				state.list.push(payload);
			};
			state.totalPrice += payload.price;
			ordersLS.set(state);
		},
		removeOrder(state: IOrdersData, action: PayloadAction<IOrder>) {
			const {id, price, quantity} = action.payload;
			state.list = state.list.filter(good => good.id !== id);
			state.totalPrice -= price * quantity;
			ordersLS.set(state);
		}
	}
});

export const { addOrder, removeOrder, cleanOrders } = ordersReducer.actions;
export default ordersReducer.reducer;