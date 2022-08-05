import React from 'react';
import { IOrder } from 'models';
import OrderCard from '../cards/OrderCard';
import useFilteredGoods from 'hooks/useFilteredGoods';
import { useAppSelector } from 'hooks/redux';
import CommonGrid from './CommonGrid';

const OrdersGrid: React.FC = () => {
	const orders = useAppSelector(state => state.orders.list);

	const filteredOrders = useFilteredGoods<IOrder>(orders);

	return (
		<CommonGrid>
			{filteredOrders.map(order => <OrderCard {...order}  key={order.id} />)}
		</CommonGrid>
	);
}

export default OrdersGrid;