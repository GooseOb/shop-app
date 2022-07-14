import React from 'react';
import Filters from '../components/Filters';
import OrdersGrid from '../components/cardGrids/OrdersGrid';
import TotalPrice from '../components/cardGrids/TotalPrice';

const Orders: React.FC = () => {
	return (
		<>
			<TotalPrice />
			<Filters />
			<OrdersGrid />
		</>
	);
}

export default Orders;