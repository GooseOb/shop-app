import { IAnyGood, IOrder, IOrderPayloadAction, IOrdersData } from "models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ordersLS } from "localStorage";

const defaultState: IOrdersData = {
	list: [],
	totalPrice: 0
};

const initialState = ordersLS.get() || defaultState;

const ordersSlice = createSlice({
	name: 'orders',
	initialState,
	reducers: {
		clearOrders(state) {
			Object.assign(state, defaultState);

			ordersLS.set(state);
		},
		increaseOrder(state, action: IOrderPayloadAction<IAnyGood>) {
			let {quantity, good} = action.payload;
			const {id, price} = good;

			let order = state.list.find(order => order.id === id);

			if (order) {
				const goodsFromApiChanged = order.price !== price;
				if (goodsFromApiChanged) {
					Object.assign(state, defaultState);
					order = undefined;
				};
			}

			if (order) {
				order.quantity += quantity;
			} else {
				const newOrder: IOrder = {
					...good,
					quantity,
					isOrder: true
				};
				state.list.push(newOrder);
			};
			state.totalPrice += price * quantity;

			ordersLS.set(state);
		},
		decreaseOrder(state, action: IOrderPayloadAction<IOrder>) {
			const {quantity, good} = action.payload;
			const {id, price, quantity: startOrderQty} = good;

			const order = state.list.find(order => order.id === id)!;
			order.quantity -= quantity;

			if (order.quantity < 1) {
				state.list = state.list.filter(order => order.id !== id);
				state.totalPrice -= price * startOrderQty;
			} else {
				state.totalPrice -= price * quantity;
			};

			ordersLS.set(state);
		},
		removeOrder(state, action: PayloadAction<IOrder>) {
			const {id, price, quantity} = action.payload;

			state.list = state.list.filter(order => order.id !== id);
			state.totalPrice -= price * quantity;

			ordersLS.set(state);
		}
	}
});

export const { increaseOrder, decreaseOrder, removeOrder, clearOrders } = ordersSlice.actions;
export default ordersSlice.reducer;