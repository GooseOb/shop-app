import React from 'react';
import { addOrder } from '../../store/reducers/orderSlice';
import { useAppDispatch } from '../../hooks/redux';
import { IconButton } from '@mui/material';
import { Add } from '@mui/icons-material';
import { IGood } from '../../models';
import Card from './Card';

const GoodCard: React.FC<IGood> = (props) => {
	const dispatch = useAppDispatch();
	return (
		<Card {...props}>
			<IconButton
				sx={{
					position: 'absolute',
					top: '50%',
					right: 0
				}}
				onClick={() => dispatch(addOrder(props))}
			>
				<Add />
			</IconButton>
		</Card>
	);
}

export default GoodCard;