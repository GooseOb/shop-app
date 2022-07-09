import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/Layout'
import Orders from '../pages/Orders';
import Main from '../pages/Main';

const useRoutes = (isAuth: boolean) => {
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

export default useRoutes;