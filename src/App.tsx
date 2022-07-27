import React, { useEffect } from 'react';
import 'style.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';
import AppRoutes from 'pages/AppRoutes';
import fetchGoods from 'store/reducers/goodSlice/fetchGoods';

const App: React.FC = () => {

	useEffect(() => {
		store.dispatch(fetchGoods());
	}, []);
	
	return (
		<Provider store={store}>
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		</Provider>
	);
}

export default App;