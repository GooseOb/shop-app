import React from 'react';
import './style.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import GoodsContext from './context/GoodsContext';
import useGoods from './hooks/useGoods';
import AppRoutes from './pages/AppRoutes';

const App: React.FC = () => {
	const goods = useGoods();
	
	console.log(1);

	return (
		<Provider store={store}>
			<GoodsContext.Provider value={goods}>
				<BrowserRouter>
					<AppRoutes />
				</BrowserRouter>
			</GoodsContext.Provider>
		</Provider>
	);
}

export default App;