import { useDeferredValue } from 'react';
import { IAnyGood } from '../models';
import { useAppSelector } from './redux';

const useFilteredGoods = <T extends IAnyGood>(goods: T[]) => {
	const {
		search,
		categoryId,
		maxPriceLimit,
		minPriceLimit
	} = useAppSelector(state => state.filter);
	const [
		searchDef,
		maxPriceLimitDef,
		minPriceLimitDef
	] = [
		search,
		maxPriceLimit,
		minPriceLimit
	].map(useDeferredValue);

	return goods.filter(({title, price, category}) => {
		if (
			(searchDef && !title.toLowerCase().includes((searchDef as string).toLowerCase()))
			|| (minPriceLimitDef && price <= minPriceLimitDef)
			|| (maxPriceLimitDef && price >= maxPriceLimitDef)
			|| (categoryId && category.id !== categoryId)
		) return false;
		return true;
	});
};

export default useFilteredGoods;