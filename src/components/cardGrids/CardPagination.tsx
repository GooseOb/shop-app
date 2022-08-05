import { Pagination, Stack } from '@mui/material';
import React from 'react';

interface Props {
	page: number,
	pageQty: number,
	setPage: (value: React.SetStateAction<number>) => void
}

const CardPagination: React.FC<Props> = ({page, setPage, pageQty}) => {
	return (
		<Stack spacing={2}>
			<Pagination
				count={pageQty}
				page={page}
				onChange={(_, num) => setPage(num)}
				sx={{margin: 'auto'}}
			/>
		</Stack>
	);
}

export default CardPagination;