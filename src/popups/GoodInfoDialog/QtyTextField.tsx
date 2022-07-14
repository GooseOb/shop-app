import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { IOrderPayload, IAnyGood, IOrder } from '../../models';
import { decreaseOrder, increaseOrder } from '../../store/reducers/orderSlice';

interface Props {
	good: IAnyGood
}

const getButton = (
	title: string,
	onClick: () => void
) => (
	<Button
		sx={{minWidth: 'unset'}}
		onClick={onClick}
	>
		{title}
	</Button>
);

const QtyTextField: React.FC<Props> = ({good}) => {
	const [qty, setQty] = useState(1);
	const dispatch = useAppDispatch();

	const {isOrder} = good;

	const payloadAction: IOrderPayload<IAnyGood> = {good, quantity: qty};

	const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		let num = +e.target.value;
		if (isNaN(num)) return;
		if (num > 1000) num = 1000
		else if (num < 0) num = 0;
		setQty(num);
	};
	const onDecrease = () => dispatch(decreaseOrder(payloadAction as IOrderPayload<IOrder>));
	const onOrder = () => dispatch(increaseOrder(payloadAction));

	const button = isOrder
		? getButton('Decrease', onDecrease)
		: getButton('Order', onOrder);

	return (
		<TextField
			label='quantity'
			value={qty || ''}
			onChange={onChange}
			size='small'
			variant='standard'
			InputProps={{endAdornment: button}}
			sx={{
				width: '12rem',
				ml: 'auto'
			}}
		/>
	);
}

export default QtyTextField;