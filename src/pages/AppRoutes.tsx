import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from 'components/Layout'
import Orders from './Orders';
import Main from './Main';
import { useAppSelector } from 'hooks/redux';

const AppRoutes = () => {
	const isAuth = useAppSelector(state => state.auth.isAuth);

	return (
		<Routes>
			<Route path='shop-app' element={<Layout />}>
				<Route index element={<Main />}/>
				{isAuth && <Route path='orders' element={<Orders />}/>}
			</Route>
			<Route
				path='*'
				element={<Navigate to='shop-app' replace />}
			/>
		</Routes>
	)
};

export default AppRoutes;