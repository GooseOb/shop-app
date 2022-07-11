import { Grid, Pagination, Stack } from '@mui/material';
import React, { useDeferredValue, useMemo, useState } from 'react';
import { IAnyGood, IGood, IOrder } from '../models';
import GoodCard from './cards/GoodCard';
import OrderCard from './cards/OrderCard';
import Search from './filters/Search';
import Filter from './filters/Filter';
import PriceFilter from './filters/PriceFilter';

interface Props {
	goods: IAnyGood[],
	isOrderPage: boolean,
	additionalRenderDeps?: any[] | false
}

type filter = [boolean, (good: IAnyGood) => any];

const CardsWithSearch: React.FC<Props> = ({goods, isOrderPage, additionalRenderDeps = false}) => {
	const [searchValue, setSearchValue] = useState('');
	const [categoryId, setCategoryId] = useState(0);
	const [maxPriceLimit, setMaxPriceLimit] = useState(0);
	const [minPriceLimit, setMinPriceLimit] = useState(0);
	const [page, setPage] = useState(1);
	const defferedValues = [
		searchValue,
		maxPriceLimit,
		minPriceLimit
	].map(useDeferredValue);

	const filtersMemo: filter[] = [
		[
			!!maxPriceLimit,
			({price}) => price <= maxPriceLimit
		], [
			!!minPriceLimit,
			({price}) => price >= minPriceLimit
		], [
			!!searchValue,
			({title}) => title.toLowerCase().includes(searchValue.toLowerCase())
		]
	];
	const filters: filter[] = [
		[
			!!categoryId,
			({category}) => category.id === categoryId
		]
	];

	let memodeps = defferedValues;
	if (additionalRenderDeps) memodeps = memodeps.concat(additionalRenderDeps);

	const getFilteredGoods = (filters: filter[], goods: IAnyGood[]) =>
		filters.reduce((acc, [condition, predicate]) => {
			return condition ? acc.filter(predicate) : acc;
		}, goods);
	const filteredGoods = getFilteredGoods(filters,
		useMemo(() => getFilteredGoods(filtersMemo, goods), memodeps)
	);

	const CARDS_ON_PAGE = 20;
	const pageQty = Math.ceil(filteredGoods.length / CARDS_ON_PAGE);
	if (pageQty < page) setPage(pageQty);
	const lastGoodIndex = CARDS_ON_PAGE * page;
	const firstGoodIndex = lastGoodIndex - CARDS_ON_PAGE;
	const goodsPiece = filteredGoods.slice(firstGoodIndex, lastGoodIndex);

	const pagination = filteredGoods.length > CARDS_ON_PAGE &&
		<Stack spacing={2}>
			<Pagination
				count={pageQty}
				page={page}
				onChange={(_, num) => setPage(num)}
				sx={{
					margin: 'auto',
				}}
			/>
		</Stack>

	const cards = isOrderPage
		? (goodsPiece as IOrder[]).map(good => <OrderCard {...good} />)
		: (goodsPiece as IGood[]).map(good => <GoodCard {...good} />);

	return (
		<>
			<Search setValue={setSearchValue} />
			<Grid container spacing={2}>
				<Grid item>
					<Filter setValue={setCategoryId}/>
				</Grid>
				<Grid item sx={{flexGrow: 1}}>
					<PriceFilter
						limits={{maxPriceLimit, minPriceLimit}}
						limitSetters={{setMaxPriceLimit, setMinPriceLimit}}
					/>
				</Grid>
				<Grid item sx={{margin: 'auto'}}>
					{pagination}
				</Grid>
			</Grid>
			<Grid
				container
				spacing={2}
				sx={{marginY: '1rem'}}
			>
				{cards}
			</Grid>
			{pagination}
		</>
	);
}

export default CardsWithSearch;