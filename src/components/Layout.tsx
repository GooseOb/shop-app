import { Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout: React.FC = () => {
	return (
		<>
			<Header />
			<Container sx={{marginY: '1rem'}}>
				<Outlet />
			</Container>
		</>
	);
}

export default Layout;