import { TextField } from '@mui/material';
import React from 'react';

const Search: React.FC<any> = ({setValue}) => {
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};
	return (
		<TextField
			label='search'
			onChange={onChange}
			fullWidth
			variant='standard'
			sx={{
				mb: '1rem',
			}}
		/>
	);
}

export default Search;