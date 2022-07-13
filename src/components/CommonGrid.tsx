import React, { useState } from 'react';
import { Grid } from '@mui/material';
import CardPagination from './CardPagination';

interface Props {
	children: JSX.Element[]
}

const CommonGrid: React.FC<Props> = ({children: cards}) => {
	const [page, setPage] = useState(1);

	const CARDS_ON_PAGE = 20;
	let goodsPiece = cards;
	let pagination = null;

	if (cards.length > CARDS_ON_PAGE) {
		const pageQty = Math.ceil(cards.length / CARDS_ON_PAGE);
		if (pageQty && pageQty < page) setPage(pageQty);
		const firstGoodIndex = (page - 1) * CARDS_ON_PAGE;
		const lastGoodIndex = firstGoodIndex + CARDS_ON_PAGE;

		goodsPiece = cards.slice(firstGoodIndex, lastGoodIndex);
		pagination =
			<CardPagination
				page={page}
				pageQty={pageQty}
				setPage={setPage}
			/>;
	};

	return (
		<>
			{pagination}
			<Grid
				container
				spacing={2}
				sx={{marginY: '1rem'}}
			>
				{goodsPiece}
			</Grid>
			{pagination}
		</>
	);
}

export default CommonGrid;