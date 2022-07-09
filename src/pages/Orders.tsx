import React from 'react';
import CardsWithSearch from '../components/CardsWithSearch';
import TotalPrice from '../components/TotalPrice';
import { useAppSelector } from '../hooks/redux';

const Orders: React.FC = () => {
	const orders = useAppSelector(state => state.orders.list);

	return (
		<>
			<TotalPrice />
			<CardsWithSearch isOrderPage={true} goods={orders} />
		</>
	);
}

export default Orders;