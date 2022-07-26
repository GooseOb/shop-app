import { Close } from '@mui/icons-material';
import { IconButton, TextField } from '@mui/material';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setSearch } from '../../store/reducers/filterSlice';

type eventType = React.ChangeEvent<HTMLInputElement>;

const Search: React.FC = () => {
	const dispatch = useAppDispatch();
	const setValue = (value: string) => dispatch(setSearch(value));
	const value = useAppSelector(state => state.filter.search);

	const onChange = (e: eventType) => {
		setValue(e.target.value);
	};

	const inputProps = {endAdornment:
		<IconButton onClick={() => setValue('')}>
			<Close />
		</IconButton>
	};

	return (
		<TextField
			InputProps={inputProps}
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