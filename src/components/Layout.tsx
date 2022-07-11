import { Container, LinearProgress } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';
import Header from './Header';

const Layout: React.FC = () => {
	const isLoading = useAppSelector(state => state.page.isLoading);

	return (
		<>
			<Header />
			{isLoading && <LinearProgress color='secondary' />}
			<Container sx={{marginY: '1rem'}}>
				<Outlet />
			</Container>
		</>
	);
}

export default Layout;