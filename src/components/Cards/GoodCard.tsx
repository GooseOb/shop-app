import React from 'react';
import { increaseOrder } from '../../store/reducers/orderSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { Add } from '@mui/icons-material';
import { IGood } from '../../models';
import Card from './Card';

const GoodCard: React.FC<IGood> = (good) => {
	const dispatch = useAppDispatch();
	const isAuth = useAppSelector(state => state.auth.isAuth);

	return (
		<Card
			{...good}
			buttons={isAuth && [{
				icon: <Add />,
				clickHandler: () => dispatch(increaseOrder({good, quantity: 1}))
			}]}
		/>
	);
}

export default GoodCard;