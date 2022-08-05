import { createAsyncThunk } from "@reduxjs/toolkit";

const QTY = '100';
const URL = 'https://api.escuelajs.co/api/v1/products?offset=0&limit=' + QTY;

export default createAsyncThunk(
	'good/fetchAll',
	async () => {
		const res = await fetch(URL);
		const data = await res.json();;
		return data;
	}
);