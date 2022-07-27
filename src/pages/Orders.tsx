import React from 'react';
import Filters from 'components/Filters';
import OrdersGrid from 'components/cardGrids/OrdersGrid';
import TotalPrice from 'components/cardGrids/TotalPrice';
import RemoveOrdersButton from 'components/RemoveOrdersButton';
import { Box } from '@mui/material';

const boxSX = {
	display: 'flex',
	justifyContent: 'right'
};

const Orders: React.FC = () => {
	return (
		<>
			<TotalPrice />
			<Filters />
			<Box sx={boxSX}>
				<RemoveOrdersButton />
			</Box>
			<OrdersGrid />
		</>
	);
}

export default Orders;