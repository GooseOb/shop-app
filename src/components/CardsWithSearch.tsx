import { Grid, Pagination, Stack } from '@mui/material';
import React, { useState } from 'react';
import Search from './Search';
import { IGood, IOrder } from '../models';
import GoodCard from './Cards/GoodCard';
import OrderCard from './Cards/OrderCard';

interface Props {
	goods: IGood[] | IOrder[],
	isOrderPage: boolean
}

const CardsWithSearch: React.FC<Props> = ({goods, isOrderPage}) => {
	const [searchValue, setSearchValue] = useState('');
	const [page, setPage] = useState(1);

	const filteredGoods = searchValue
		? goods.filter(good => good.title.toLowerCase().includes(searchValue.toLowerCase()))
		: goods;

	const CARDS_ON_PAGE = 20;
	const pageQty = Math.ceil(goods.length / CARDS_ON_PAGE);
	const lastGoodIndex = CARDS_ON_PAGE * page;
	const firstGoodIndex = lastGoodIndex - CARDS_ON_PAGE;
	const goodsPiece = filteredGoods.slice(firstGoodIndex, lastGoodIndex);

	const Card = isOrderPage ? OrderCard : GoodCard;

	const pagination = filteredGoods.length > CARDS_ON_PAGE &&
		<Stack spacing={2}>
			<Pagination
				count={pageQty}
				page={page}
				onChange={(_, num) => setPage(num)}
				sx={{
					marginX: 'auto'
				}}
			/>
		</Stack>

	return (
		<>
			<Search setValue={setSearchValue} />
			{pagination}
			<Grid
				container
				spacing={2}
				sx={{
					marginY: '1rem'
				}}
			>
				{goodsPiece.map(good => <Card key={good.id} {...good} />)}
			</Grid>
			{pagination}
		</>
	);
}

export default CardsWithSearch;