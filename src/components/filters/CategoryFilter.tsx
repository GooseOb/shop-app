import { Select, MenuItem, InputLabel, FormControl, SelectChangeEvent } from '@mui/material';
import React from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { setCategoryId } from 'store/reducers/filterSlice';

type eventType = SelectChangeEvent<number | string>;

interface ICategory {
	id: number | string,
	name: string,
	key: string
}

const categories: ICategory[] = ['All', 'Clothes', 'Electronics', 'Furniture', 'Shoes', 'Others']
	.map((name, i) => ({id: i, name, key: Math.random().toString(32)}));
categories[0].id = '';

const CategoryFilter: React.FC = () => {
	const dispatch = useAppDispatch();
	const value = useAppSelector(state => state.filter.categoryId) || '';

	const onChange = (e: eventType) => {
		dispatch(setCategoryId(+e.target.value || 0));
	};

	return (
		<FormControl sx={{mr: '2rem', minWidth: 120}}>
			<InputLabel id='category-label'>Category</InputLabel>
			<Select
				labelId='category-label'
				id='category-select'
				label='Category'
				variant='standard'
				value={value}
				onChange={onChange}
			>
				{categories.map(({id, name, key}) => (
					<MenuItem key={key} value={id}>{name}</MenuItem>
				))}
			</Select>
		</FormControl>
	);
}

export default CategoryFilter;