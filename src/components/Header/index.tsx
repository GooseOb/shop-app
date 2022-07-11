import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import React from 'react';
import { Link  } from 'react-router-dom';
import OrderCount from './OrderCount';
import LoginDialog from '../../dialogs/Auth/LoginDialog';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { login, logout } from '../../store/reducers/authSlice';

const Header: React.FC = () => {
	const isAuth = useAppSelector(state => state.auth.isAuth);
	const dispatch = useAppDispatch();

	return (
		<AppBar position='static'>
			<Toolbar>
				<Typography variant='h5' sx={{flexGrow: 1}}>
					<Link to='shop-app'>
						Shop
					</Link>
				</Typography>
				{
					isAuth
						? <>
							<Link to='orders'>
								<IconButton color='inherit'>
									<ShoppingCart />
									<OrderCount />
								</IconButton>
							</Link>
							<Button
								variant='contained'
								color='secondary'
								sx={{
									ml: '1rem'
								}}
								onClick={() => dispatch(logout())}
							>
								Log out
							</Button>
						</> : <LoginDialog
							button={(handler) => (
								<Button
									variant='contained'
									color='secondary'
									onClick={handler}
								>
									Log in
								</Button>
							)}
							login={() => dispatch(login())}
						/>
				}
			</Toolbar>
		</AppBar>
	);
}

export default Header;