import React from 'react';
import Filters from '../components/Filters';
import GoodsGrid from '../components/GoodsGrid';

const Main: React.FC = () => {
	return (
		<>
			<Filters />
			<GoodsGrid />
		</>
	);
}

export default Main;