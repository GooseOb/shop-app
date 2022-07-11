import React, { useEffect, useContext } from 'react';
import CardsWithSearch from '../components/CardsWithSearch';
import GoodsContext from '../context/GoodsContext';
import { useAppDispatch } from '../hooks/redux';
import { setLoading } from '../store/reducers/pageSlice';

const Main: React.FC = () => {
	const goods = useContext(GoodsContext);
	const dispatch = useAppDispatch();
	const setLoad = (loading: boolean) => dispatch(setLoading(loading));
	setLoad(!goods.length);
	useEffect(() => () => {
		setLoad(false);
	}, []);

	return (
		goods.length
			? <CardsWithSearch isOrderPage={false} goods={goods} />
			: <></>
	);
}

export default Main;