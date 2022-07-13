import React from 'react';
import { Grid } from '@mui/material';
import Search from './Search';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';

const Filters: React.FC = () => {
	return (
		<>
			<Search />
			<Grid container spacing={2}>
				<Grid item>
					<CategoryFilter />
				</Grid>
				<Grid item sx={{flexGrow: 1}}>
					<PriceFilter />
				</Grid>
			</Grid>
		</>
	);
}

export default Filters;