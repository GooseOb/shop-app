import React from 'react';
import GoodsWithSearch from '../components/GoodsWithSearch';
import { IGood } from '../models';

interface Props {
	goods: IGood[]
}

const Main: React.FC<Props> = ({goods}) => {
	return (
		<GoodsWithSearch isOrderPage={false} goods={goods} />
	);
}

export default Main;