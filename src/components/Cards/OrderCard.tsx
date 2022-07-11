import React from 'react';
import { decreaseOrder, removeOrder } from '../../store/reducers/orderSlice';
import { useAppDispatch } from '../../hooks/redux';
import { Typography } from '@mui/material';
import { Close, Remove } from '@mui/icons-material';
import { IOrder } from '../../models';
import Card from './Card';

const OrderCard: React.FC<IOrder> = (props) => {
	const {quantity} = props;
	const dispatch = useAppDispatch();

	return (
		<Card
			{...props}
			buttons={[{
				icon: <Remove />,
				clickHandler() {dispatch(decreaseOrder({good: props, quantity: 1}))}
			}, {
				icon: <Close />,
				clickHandler() {dispatch(removeOrder(props))}
			}]}
		>
			{(quantity > 1 &&
				<Typography variant='body2'>
					quantity: {quantity}
				</Typography>
			) as JSX.Element}
		</Card>
	);
}

export default OrderCard;