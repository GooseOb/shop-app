import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout'
import Orders from './pages/Orders';
import Main from './pages/Main';
import './style.css'
import { Provider } from 'react-redux';
import store from './store';

interface IResponse {
	albumId: number,
	id: number,
	thumbnailUrl: string,
	title: string,
	url: string
}

const App: React.FC = () => {
	const [goods, setGoods] = useState([]);

	useEffect(() => {
		if (!goods.length) fetch('https://jsonplaceholder.typicode.com/photos?_end=100')
			.then((body) => body.json())
			.then((arr) => arr.map(({id, title, url}: IResponse) => ({
				id,
				title,
				image: url,
				price: Math.trunc(Math.random()*100)
			})))
			.then(setGoods);
	}, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
				<Route path='/shop-app' element={<Layout />}>
					<Route index element={<Main goods={goods} />}/>
					<Route path='orders' element={<Orders />}/>
				</Route>
				<Route
					path="*"
					element={<Navigate to="/shop-app" replace />}
				/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;