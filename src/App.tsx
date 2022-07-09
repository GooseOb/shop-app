import React from 'react';
import './style.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import useRoutes from './hooks/useRoutes';
import AuthContext from './context/Auth';
import GoodsContext from './context/Goods';
import useAuth from './hooks/useAuth';
import useGoods from './hooks/useGoods';

const App: React.FC = () => {
	const auth = useAuth();
	const goods = useGoods();
	const routes = useRoutes(auth.isAuth);

	return (
		<Provider store={store}>
			<GoodsContext.Provider value={goods}>
				<AuthContext.Provider value={auth}>
					<BrowserRouter>
						{routes}
					</BrowserRouter>
				</AuthContext.Provider>
			</GoodsContext.Provider>
		</Provider>
	);
}

export default App;