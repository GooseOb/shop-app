import { Button } from '@mui/material';
import React from 'react';
import LoginDialog from '../../dialogs/Auth/LoginDialog';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { login, logout } from '../../store/reducers/authSlice';
import { cleanOrders } from '../../store/reducers/orderSlice';
import PopupButton from '../PopupButton';
import CartBtn from './CartBtn';

const AuthAndCart: React.FC = () => {
	const isAuth = useAppSelector(state => state.auth.isAuth);
	const dispatch = useAppDispatch();

	const onLogoutClick = () => {
		dispatch(cleanOrders());
		dispatch(logout());
	};
	const onLoginClick = () => {
		dispatch(login())
	};

	return (isAuth
		? <>
			<CartBtn />
			<Button
				variant='contained'
				color='secondary'
				sx={{ml: '1rem'}}
				onClick={onLogoutClick}
			>
				Log out
			</Button>
		</> :
		<PopupButton
			title='Log in'
			popup={(props) => (
				<LoginDialog {...props} login={onLoginClick} />
			)}
			variant='contained'
			color='secondary'
		/>
	);
}

export default AuthAndCart;