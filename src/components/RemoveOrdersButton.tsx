import React from 'react';
import { Button } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { clearOrders } from 'store/reducers/orderSlice';

const RemoveOrdersButton: React.FC = () => {
	const dispatch = useAppDispatch();
    const removeOrders = () => dispatch(clearOrders());
    const areOrders = !!useAppSelector(state => state.orders.list.length);

	return (areOrders ?
        <Button onClick={removeOrders} variant='contained'>
            Remove Orders
        </Button>
        : <></>
	);
}

export default RemoveOrdersButton;