import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGood } from "../../../models";
import fetchGoods from "./fetchGoods";

interface IResponse {
	id: number,
	title: string,
	description: string,
	price: number,
	images: string[],
	category: {
		id: number,
		name: string,
		image: string
	}
}

interface IGoodState {
	list: IGood[],
	isLoading: boolean,
	error: string
}

const initialState: IGoodState = {
	list: [],
	isLoading: true,
	error: ''
};

const goodsSlice = createSlice({
	name: 'goods',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchGoods.fulfilled.type]: (state, action: PayloadAction<IResponse[]>) => {
			state.isLoading = false;
			state.list = action.payload.map(
				({id, title, description, price, images, category: c}) =>
				({id, title, description, price, images, category: {id: c.id, name: c.name}, isOrder: false})
			) as any as IGood[];
		},
		[fetchGoods.pending.type]: (state) => {
			state.isLoading = true;
		},
		[fetchGoods.rejected.type]: (state, action: PayloadAction<string>) => {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export default goodsSlice.reducer;