import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IPage {
	isLoading: boolean,
}

const initialState: IPage = {
	isLoading: false,
};

const ordersReducer = createSlice({
	name: 'page',
	initialState,
	reducers: {
		setLoading(state, action: PayloadAction<boolean>) {
			state.isLoading = action.payload;
		},
	}
});

export const { setLoading } = ordersReducer.actions;
export default ordersReducer.reducer;