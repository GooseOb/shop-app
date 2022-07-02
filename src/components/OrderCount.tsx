import { Badge } from '@mui/material';
import React from 'react';
import { useAppSelector } from '../hooks/redux';

const OrderCount: React.FC = () => {
	const orders = useAppSelector(state => state.orders.list);

	return (
		<Badge
			color='secondary'
			badgeContent={orders.length}
		/>
	);
}

export default OrderCount;