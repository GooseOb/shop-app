import { Typography } from '@mui/material';
import React from 'react';

interface Props {
	value: number
}

const TotalPrice: React.FC<Props> = ({value}) => {
	return (
		<Typography
			variant='h4'
			sx={{
				mt: '1rem'
			}}
		>
			Total price: ${value}
		</Typography>
	);
}

export default TotalPrice;