import { LinearProgress } from '@mui/material';
import React from 'react';
import { useAppSelector } from 'hooks/redux';

const LoadingLine: React.FC = () => {
	const isLoading = useAppSelector(state => state.page.isLoading);

	return (
		isLoading
			? <LinearProgress color='secondary' />
			: <></>
	);
}

export default LoadingLine;