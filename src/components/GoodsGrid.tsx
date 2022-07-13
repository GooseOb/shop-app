import React, { useEffect } from 'react';
import { IGood } from '../models';
import GoodCard from './cards/GoodCard';
import useFilteredGoods from '../hooks/useFilteredGoods';
import CommonGrid from './CommonGrid';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setLoading } from '../store/reducers/pageSlice';

const GoodsGrid: React.FC = () => {
	const {list: goods, isLoading} = useAppSelector(state => state.goods);

	const filteredGoods = useFilteredGoods<IGood>(goods, [goods.length]);
	const dispatch = useAppDispatch();
	const setLoad = (loading: boolean) => dispatch(setLoading(loading));

	useEffect(() => {
		setLoad(isLoading);

		return () => {
			setLoad(false);
		};
	}, [isLoading]);

	return (isLoading ? <></> :
		<CommonGrid>
			{filteredGoods.map(good => <GoodCard {...good}  key={good.id} />)}
		</CommonGrid>
	);
}

export default GoodsGrid;