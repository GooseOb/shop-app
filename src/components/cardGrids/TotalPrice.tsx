import { Typography } from '@mui/material';
import React from 'react';
import { useAppSelector } from '../../hooks/redux';

const TotalPrice: React.FC = () => {
	const value = useAppSelector(state => state.orders.totalPrice);

	return (
		<Typography
			variant='h4'
			sx={{mt: '1rem'}}
		>
			Total price: ${value}
		</Typography>
	);
}

export default TotalPrice;