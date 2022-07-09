import React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { IGood } from '../../models';

interface Props extends IGood {
	amount?: number,
	children: JSX.Element | JSX.Element[] | boolean
}

const CardComponent: React.FC<Props> = ({children, ...props}) => {
	const {title, image, price} = props;

	return (
		<Grid item xs={12} md={3}>
			<Card>
				<CardMedia
					component='img'
					height='140'
					image={image}
				/>
				<CardContent
					sx={{
						padding: 1,
						position: 'relative'
					}}
				>
					<Typography variant='body1'>
						{title}
					</Typography>
					<Typography variant='body2'>
						${price}
					</Typography>
					{children}
				</CardContent>
			</Card>
		</Grid>
	);
}

export default CardComponent;