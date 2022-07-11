import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { IOrderPayload, IAnyGood, IOrder } from '../../models';
import { decreaseOrder, increaseOrder } from '../../store/reducers/orderSlice';

interface Props {
	good: IAnyGood
}

const QtyTextField: React.FC<Props> = ({good}) => {
	const {isOrder} = good;
	const [qty, setQty] = useState(1);
	const payloadAction: IOrderPayload<IAnyGood> = {good, quantity: qty};
	const dispatch = useAppDispatch();
	const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		let num = +e.target.value;
		if (isNaN(num)) return;
		if (num > 1000) num = 1000
		else if (num < 0) num = 0;
		setQty(num);
	};

	return (
		<TextField
			label='quantity'
			value={qty || ''}
			onChange={onChange}
			size='small'
			variant='standard'
			InputProps={{endAdornment: isOrder
				? <Button sx={{minWidth: 'unset'}} onClick={() => dispatch(decreaseOrder(payloadAction as IOrderPayload<IOrder>))}>
					Decrease
				</Button>
				: <Button onClick={() => dispatch(increaseOrder(payloadAction))}>
					Order
				</Button>
			}}
			sx={{
				width: '12rem',
				ml: 'auto'
			}}
		/>
	);
}

export default QtyTextField;