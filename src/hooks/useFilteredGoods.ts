import { useDeferredValue, useMemo } from 'react';
import { useAppSelector } from './redux';

type filter = [boolean, (good: any) => any];

const getFilteredGoods = <T>(filters: filter[], goods: T[]) => {
	return filters.reduce((acc, [condition, predicate]) => {
		return condition ? acc.filter(predicate) : acc;
	}, goods);
};

const useFilteredGoods = <T>(
	goods: T[],
	additionalRenderDeps: any[] | false = false
) => {
	const {
		search,
		categoryId,
		maxPriceLimit,
		minPriceLimit
	} = useAppSelector(state => state.filter);
	const defferedValues = [
		search,
		maxPriceLimit,
		minPriceLimit
	].map(useDeferredValue);

	let memodeps = defferedValues;
	if (additionalRenderDeps) {
		memodeps = memodeps.concat(additionalRenderDeps);
	};

	const filtersMemo: filter[] = [
		[
			!!search,
			({title}) => title.toLowerCase().includes(search.toLowerCase())
		],
		[
			!!maxPriceLimit,
			({price}) => price <= maxPriceLimit
		], [
			!!minPriceLimit,
			({price}) => price >= minPriceLimit
		]
	];
	const filters: filter[] = [
		[
			!!categoryId,
			({category}) => category.id === categoryId
		]
	];

	return getFilteredGoods<T>(filters,
		useMemo(() => getFilteredGoods<T>(filtersMemo, goods), memodeps)
	);
};

export default useFilteredGoods;