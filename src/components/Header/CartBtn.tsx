import React from 'react';
import { Link  } from 'react-router-dom';
import { IconButton } from '@mui/material';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import OrderCount from './OrderCount';

const CartBtn: React.FC = () => {
	return (
		<Link to='orders'>
			<IconButton color='inherit'>
				<ShoppingCart />
				<OrderCount />
			</IconButton>
		</Link>
	);
}

export default CartBtn;