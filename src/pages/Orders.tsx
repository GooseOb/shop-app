import React from 'react';
import GoodsWithSearch from '../components/GoodsWithSearch';
import TotalPrice from '../components/TotalPrice';
import { useAppSelector } from '../hooks/redux';

const Orders: React.FC = () => {
	const orders = useAppSelector(state => state.orders.list);

	return (
		<>
			<TotalPrice />
			<GoodsWithSearch isOrderPage={true} goods={orders} />
		</>
	);
}

export default Orders;