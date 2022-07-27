import { Button } from '@mui/material';
import React from 'react';
import LoginDialog from 'popups/Auth/LoginDialog';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { login, logout } from 'store/reducers/authSlice';
import { clearOrders } from 'store/reducers/orderSlice';
import PopupButton from '../PopupButton';
import CartBtn from './CartBtn';

const AuthAndCart: React.FC = () => {
	const isAuth = useAppSelector(state => state.auth.isAuth);
	const dispatch = useAppDispatch();

	const onLogoutClick = () => {
		dispatch(clearOrders());
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
			popup={LoginDialog}
			props={{login: onLoginClick}}
			variant='contained'
			color='secondary'
		>
			Log in
		</PopupButton>
	);
}

export default AuthAndCart;