import React, { useState } from 'react';
import { Grid } from '@mui/material';
import CardPagination from './CardPagination';

interface Props {
	children: JSX.Element[]
}

const CARDS_ON_PAGE = 20;

const CommonGrid: React.FC<Props> = ({children: cards}) => {
	const [page, setPage] = useState(1);

	if (cards.length < CARDS_ON_PAGE) return (
		<Grid
			container
			spacing={2}
			sx={{marginY: '1rem'}}
		>
			{cards}
		</Grid>
	);

	const pageQty = Math.ceil(cards.length / CARDS_ON_PAGE);

	if (pageQty && pageQty < page) setPage(pageQty);

	const firstCardIndex = (page - 1) * CARDS_ON_PAGE;
	const lastCardIndex = firstCardIndex + CARDS_ON_PAGE;
	const cardsPart = cards.slice(firstCardIndex, lastCardIndex);

	const pagination =
		<CardPagination
			page={page}
			setPage={setPage}
			pageQty={pageQty}
		/>;

	return (
		<>
			{pagination}
			<Grid
				container
				spacing={2}
				sx={{marginY: '1rem'}}
			>
				{cardsPart}
			</Grid>
			{pagination}
		</>
	);
}

export default CommonGrid;