import React from 'react';
import CardsWithSearch from '../components/CardsWithSearch';
import TotalPrice from '../components/TotalPrice';
import { useAppSelector } from '../hooks/redux';

const Orders: React.FC = () => {
	const {list: orders, totalPrice} = useAppSelector(state => state.orders);

	return (
		<>
			<TotalPrice value={totalPrice} />
			<CardsWithSearch
				isOrderPage={true}
				goods={orders}
				additionalRenderDeps={[totalPrice]}
			/>
		</>
	);
}

export default Orders;