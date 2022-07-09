import { useEffect, useState } from "react";
import getRandomValue from '../getRandomValue';
import { IGood } from "../models";

interface IResponse {
	albumId: number,
	id: number,
	thumbnailUrl: string,
	title: string,
	url: string
}

let isFetched = false;

const useGoods = (): IGood[] => {
	const [goods, setGoods] = useState<IGood[]>([]);

	useEffect(() => {
		if (!isFetched) (async () => {
			const resPromise = await fetch('https://jsonplaceholder.typicode.com/photos?_end=100');
			const resArr = await resPromise.json();
			const goodsArr = resArr.map(({title, url}: IResponse) => ({
				id: getRandomValue(),
				title,
				image: url,
				price: Math.trunc(Math.random()*100)
			}));
			setGoods(goodsArr);
		})();
		isFetched = true;
	}, [])

	return goods;
};

export default useGoods;