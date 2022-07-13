import { Badge } from '@mui/material';
import React from 'react';
import { useAppSelector } from '../../hooks/redux';

const OrderCount: React.FC = () => {
	const ordersQty = useAppSelector(state => state.orders.list.length);

	return (
		<Badge
			color='secondary'
			badgeContent={ordersQty}
		/>
	);
}

export default OrderCount;