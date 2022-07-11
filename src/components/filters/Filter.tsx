import { Select, MenuItem, InputLabel, FormControl, SelectChangeEvent } from '@mui/material';
import React from 'react';

interface category {
	id: number | string,
	name: string,
	key: string
}

const categories: category[] = ['All', 'Clothes', 'Electronics', 'Furniture', 'Shoes', 'Others']
	.map((name, i) => ({id: i, name, key: Math.random().toString(32)}));
categories[0].id = '';

interface Props {
	setValue: React.Dispatch<React.SetStateAction<number>>
}

const Filter: React.FC<Props> = ({setValue}) => {
	const onChange = (e: SelectChangeEvent<number | string>) => {
		setValue(+e.target.value || 0);
	};

	return (
		<FormControl sx={{mr: '2rem', minWidth: 120}}>
			<InputLabel id='category-label'>Category</InputLabel>
			<Select
				labelId='category-label'
				id='category-select'
				label='Category'
				variant='standard'
				onChange={onChange}
			>
				{categories.map(({id, name, key}) => (
					<MenuItem key={key} value={id}>{name}</MenuItem>
				))}
			</Select>
		</FormControl>
	);
}

export default Filter;