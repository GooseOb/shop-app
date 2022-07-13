import React from 'react';
import { decreaseOrder, removeOrder } from '../../store/reducers/orderSlice';
import { useAppDispatch } from '../../hooks/redux';
import { Typography } from '@mui/material';
import { Close, Remove } from '@mui/icons-material';
import { IOrder } from '../../models';
import Card from './Card';

const OrderCard: React.FC<IOrder> = (order) => {
	const {quantity} = order;
	const dispatch = useAppDispatch();
	const isQtyShow = quantity > 1;

	const buttons = [{
		icon: <Remove />,
		clickHandler() {dispatch(decreaseOrder({good: order, quantity: 1}))}
	}, {
		icon: <Close />,
		clickHandler() {dispatch(removeOrder(order))}
	}];

	if (!isQtyShow) buttons.shift();

	return (
		<Card
			{...order}
			buttons={buttons}
		>
			{(isQtyShow &&
				<Typography variant='body2'>
					quantity: {quantity}
				</Typography>
			) as JSX.Element}
		</Card>
	);
}

export default OrderCard;