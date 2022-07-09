import { AppBar, Button, Container, IconButton, Toolbar, Typography } from '@mui/material';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import OrderCount from './OrderCount';
import LoginDialog from './Auth/LoginDialog';
import AuthContext from '../context/Auth';

const Layout: React.FC = () => {
	const {isAuth, logout} = useContext(AuthContext);

	return (
		<>
			<AppBar position='static'>
				<Toolbar>
					<Typography variant='h5' sx={{flexGrow: 1}}>
						<Link to='/shop-app'>
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
									onClick={logout}
								>
									Log out
								</Button>
							</> : <LoginDialog button={(handler) => (
								<Button
									variant='contained'
									color='secondary'
									onClick={handler}
								>
									Log in
								</Button>
							)} />
					}
				</Toolbar>
			</AppBar>

			<Container
				sx={{
					marginY: '1rem'
				}}
			>
				<Outlet />
			</Container>
		</>
	);
}

export default Layout;