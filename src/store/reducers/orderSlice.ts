import { IGood, IOrder } from "../../models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface ordersState {
	list: IOrder[],
	totalPrice: number
}

const initialState: ordersState = {
	list: [],
	totalPrice: 0
};

const searchOrder = (state: ordersState, id: string, isAdd: boolean) => {
	const {list} = state;
	const {length} = list;
	let i = 0;
	const id1 = isAdd ? 'ID' : 'id';
	while (i < length) {
		if (list[i][id1] === id) return list[i];
		i++;
	};
	return false;
}

const ordersReducer = createSlice({
	name: 'orders',
	initialState,
	reducers: {
		addOrder(state: ordersState, action: PayloadAction<IGood>) {
			const payload = {...action.payload as IOrder};
			const order = searchOrder(state, payload.id, true);
			if (order) {
				order.quantity++;
			} else {
				payload.quantity = 1;
				payload.ID = payload.id;
				payload.id = (Math.random()*1e8).toString(36);
				state.list.push(payload);
			}
			state.totalPrice += payload.price;
		},
		removeOrder(state: ordersState, action: PayloadAction<IOrder>) {
			const {id, price, quantity} = action.payload;
			state.list = state.list.filter(good => good.id !== id);
			state.totalPrice -= price * quantity;
		}
	}
});

export const { addOrder, removeOrder } = ordersReducer.actions;
export default ordersReducer.reducer;