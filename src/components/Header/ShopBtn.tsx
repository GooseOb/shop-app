import React from 'react';
import { Link  } from 'react-router-dom';
import { Typography } from '@mui/material';

const ShopBtn: React.FC = () => {
	return (
		<Typography variant='h5' sx={{flexGrow: 1}}>
			<Link to=''>
				Shop
			</Link>
		</Typography>
	);
}

export default ShopBtn;