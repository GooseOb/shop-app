import React from 'react';
import Filters from '../components/Filters';
import OrdersGrid from '../components/OrdersGrid';
import TotalPrice from '../components/TotalPrice';

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