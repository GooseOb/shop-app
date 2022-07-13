import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IPage {
	isLoading: boolean,
}

const initialState: IPage = {
	isLoading: false,
};

const pageSlice = createSlice({
	name: 'page',
	initialState,
	reducers: {
		setLoading(state, action: PayloadAction<boolean>) {
			state.isLoading = action.payload;
		},
	}
});

export const { setLoading } = pageSlice.actions;
export default pageSlice.reducer;