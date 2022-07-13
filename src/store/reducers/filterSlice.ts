import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IFilterValues {
	search: string,
	categoryId: number,
	maxPriceLimit: number,
	minPriceLimit: number,
}

const initialState: IFilterValues = {
	search: '',
	categoryId: 0,
	maxPriceLimit: 0,
	minPriceLimit: 0,
};

const filterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setSearch(state, action: PayloadAction<string>) {
			state.search = action.payload;
		},
		setCategoryId(state, action: PayloadAction<number>) {
			state.categoryId = action.payload;
		},
		setMaxPriceLimit(state, action: PayloadAction<number>) {
			state.maxPriceLimit = action.payload;
		},
		setMinPriceLimit(state, action: PayloadAction<number>) {
			state.minPriceLimit = action.payload;
		}
	}
});

export const {
	setSearch,
	setCategoryId,
	setMaxPriceLimit,
	setMinPriceLimit
} = filterSlice.actions;
export default filterSlice.reducer;