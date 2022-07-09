import React, { useContext } from 'react';
import { addOrder } from '../../store/reducers/orderSlice';
import { useAppDispatch } from '../../hooks/redux';
import { IconButton } from '@mui/material';
import { Add } from '@mui/icons-material';
import { IGood } from '../../models';
import Card from './Card';
import AuthContext from '../../context/Auth';

const GoodCard: React.FC<IGood> = (props) => {
	const dispatch = useAppDispatch();
	const {isAuth} = useContext(AuthContext);

	return (
		<Card {...props}>
			{
				isAuth && <IconButton
					sx={{
						position: 'absolute',
						top: '50%',
						right: 0
					}}
					onClick={() => dispatch(addOrder(props))}
				>
					<Add />
				</IconButton>
			}
		</Card>
	);
}

export default GoodCard;