import React from 'react';
import { removeOrder } from '../../store/reducers/orderSlice';
import { useAppDispatch } from '../../hooks/redux';
import { Typography, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import { IGood, IOrder } from '../../models';
import Card from './Card';

const OrderCard: React.FC<IOrder | IGood> = (props) => {
	const {quantity} = props as IOrder;
	const dispatch = useAppDispatch();
	return (
		<Card {...props}>
			<IconButton
				sx={{
					position: 'absolute',
					top: '50%',
					right: 0
				}}
				onClick={() => dispatch(removeOrder(props as IOrder))}
			>
				<Close />
			</IconButton>
			{(quantity > 1 &&
				<Typography variant='body2'>
					quantity: {quantity}
				</Typography>
			) as JSX.Element}
		</Card>
	);
}

export default OrderCard;