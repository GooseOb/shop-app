import { Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import LoadingLine from './Header/LoadingLine';

const Layout: React.FC = () => {
	return (
		<>
			<Header />
			<LoadingLine />
			<Container sx={{marginY: '1rem'}}>
				<Outlet />
			</Container>
		</>
	);
}

export default Layout;