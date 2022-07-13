import React from 'react';
import { Stack, Typography } from '@mui/material';
import MinLimit from './MinLimit';
import MaxLimit from './MaxLimit';

const PriceFilter: React.FC = () => {
	return (
		<Stack direction='row' sx={{mr: 'auto'}}>
			<Typography sx={{marginY: 'auto'}} variant='body1'>
				Price: from
			</Typography>
			<MinLimit />
			<Typography sx={{marginY: 'auto'}} variant='body1'>
				to
			</Typography>
			<MaxLimit />
		</Stack>
	);
}

export default PriceFilter;