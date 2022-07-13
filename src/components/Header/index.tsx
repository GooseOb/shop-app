import { AppBar, Toolbar } from '@mui/material';
import React from 'react';
import AuthAndCart from './AuthAndCart';
import ShopBtn from './ShopBtn';

const Header: React.FC = () => {
	return (
		<AppBar position='static'>
			<Toolbar>
				<ShopBtn />
				<AuthAndCart />
			</Toolbar>
		</AppBar>
	);
}

export default Header;