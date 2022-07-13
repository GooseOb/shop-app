import { createAsyncThunk } from "@reduxjs/toolkit";

const URL = 'https://api.escuelajs.co/api/v1/products?offset=0&limit=100';

export default createAsyncThunk(
	'good/fetchAll',
	async () => {
		const res = await fetch(URL);
		const data = await res.json();;
		return data;
	}
);