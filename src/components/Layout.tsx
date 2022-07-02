import { AppBar, Container, IconButton, Toolbar, Typography } from '@mui/material';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import OrderCount from './OrderCount';

const Layout: React.FC = () => {
	return (
		<>
			<AppBar position='static'>
				<Toolbar>
					<Typography variant='h5' sx={{flexGrow: 1}}>
						<Link to='/shop-app'>
							Shop
						</Link>
					</Typography>
					<Link to='orders'>
						<IconButton color='inherit'>
							<ShoppingCart />
							<OrderCount />
						</IconButton>
					</Link>
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