import React, { useContext } from 'react';
import CardsWithSearch from '../components/CardsWithSearch';
import GoodsContext from '../context/GoodsContext';

const Main: React.FC = () => {
	const goods = useContext(GoodsContext);

	return (
		<CardsWithSearch isOrderPage={false} goods={goods} />
	);
}

export default Main;