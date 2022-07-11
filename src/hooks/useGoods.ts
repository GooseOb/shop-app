import { useEffect, useState } from "react";
import { IGood } from "../models";

interface IResponse {
	id: number,
	title: string,
	description: string,
	price: number,
	images: string[],
	category: {
		id: number,
		name: string,
		image: string
	}
}

const URL = 'https://api.escuelajs.co/api/v1/products?offset=0&limit=100';
let isFetched = false;

const useGoods = (): IGood[] => {
	const [goods, setGoods] = useState<IGood[]>([]);

	useEffect(() => {
		if (isFetched) return;
		(async () => {
			const resPromise = await fetch(URL);
			const resArr = await resPromise.json();
			const goodsArr = resArr.map(
				({id, title, description, price, images, category: c}: IResponse) =>
				({id, title, description, price, images, category: {id: c.id, name: c.name}, isOrder: false})
			);
			setGoods(goodsArr);
		})();
		isFetched = true;
	}, [])

	return goods;
};

export default useGoods;