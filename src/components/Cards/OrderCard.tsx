import React from 'react';
import { decreaseOrder, increaseOrder, removeOrder } from 'store/reducers/orderSlice';
import { useAppDispatch } from 'hooks/redux';
import { Typography } from '@mui/material';
import { Add, Close, Remove } from '@mui/icons-material';
import { IOrder } from 'models';
import Card from './Card';

const OrderCard: React.FC<IOrder> = (order) => {
	const {quantity} = order;
	const dispatch = useAppDispatch();
	const isQtyShow = quantity > 1;

	const orderPayload = {good: order, quantity: 1};

	let buttons = [{
		icon: <Remove />,
		clickHandler() {dispatch(decreaseOrder(orderPayload))}
	}, {
		icon: <Add />,
		clickHandler() {dispatch(increaseOrder(orderPayload))}
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