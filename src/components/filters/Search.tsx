import { TextField } from '@mui/material';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setSearch } from '../../store/reducers/filterSlice';

type eventType = React.ChangeEvent<HTMLInputElement>;

const Search: React.FC = () => {
	const dispatch = useAppDispatch();
	const value = useAppSelector(state => state.filter.search);

	const onChange = (e: eventType) => {
		dispatch(setSearch(e.target.value));
	};

	return (
		<TextField
			label='search'
			fullWidth
			variant='standard'
			sx={{mb: '1rem'}}
			value={value}
			onChange={onChange}
		/>
	);
}

export default Search;