import { IAnyGood, IOrder, IOrderPayloadAction, IOrdersData } from "../../models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ordersLS } from "../../localStorage";

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
		increaseOrder(state, action: IOrderPayloadAction<IAnyGood>) {
			let {quantity, good} = action.payload;
			good = {...good};
			const {id, price} = good;

			let order = state.list.find(order => order.ID === id);

			if (order) {
				const goodsFromApiChanged = order.price !== price;
				if (goodsFromApiChanged) {
					Object.assign(state, defaultState);
					order = undefined;
				};
			}

			if (order) {
				(order as IOrder).quantity += quantity;
			} else {
				Object.assign(good, {
					quantity,
					ID: id,
					id: id + 'order',
					isOrder: true
				});
				state.list.push(good as IOrder);
			};
			state.totalPrice += price * quantity;

			ordersLS.set(state);
		},
		decreaseOrder(state, action: IOrderPayloadAction<IOrder>) {
			const {quantity, good} = action.payload;
			const {id, price, quantity: startOrderQty} = good;

			const stateOrder = state.list.find(good => good.id === id) as IOrder;
			stateOrder.quantity -= quantity;

			if (stateOrder.quantity < 1) {
				state.list = state.list.filter(good => good.id !== id);
				state.totalPrice -= price * startOrderQty;
			} else {
				state.totalPrice -= price * quantity;
			};

			ordersLS.set(state);
		},
		removeOrder(state, action: PayloadAction<IOrder>) {
			const {id, price, quantity} = action.payload;

			state.list = state.list.filter(good => good.id !== id);
			state.totalPrice -= price * quantity;

			ordersLS.set(state);
		}
	}
});

export const { increaseOrder, decreaseOrder, removeOrder, cleanOrders } = ordersReducer.actions;
export default ordersReducer.reducer;