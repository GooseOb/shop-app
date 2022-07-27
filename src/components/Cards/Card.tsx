import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Grid, Typography, IconButton } from '@mui/material';
import { IAnyGood } from 'models';
import GoodInfoDialog from 'popups/GoodInfoDialog';
import PopupButton from '../PopupButton';

interface Props extends IAnyGood {
	amount?: number,
	children?: React.ReactNode,
	buttons?: {
		icon: JSX.Element,
		clickHandler: () => void
	}[] | false
}

const CardComponent: React.FC<Props> = ({children, buttons, ...good}) => {
	const {title, images: [image], price} = good;

	const actionButtons = buttons && buttons.map(({icon, clickHandler}, i) =>
		<IconButton onClick={clickHandler} key={'btn' + i}>
			{icon}
		</IconButton>
	);

	return (
		<Grid item xs={12} md={3}>
			<Card>
				<CardMedia
					component='img'
					height='140'
					image={image}
				/>
				<CardContent sx={{padding: 1}}>
					<Typography variant='body1'>
						{title}
					</Typography>
					<Typography variant='body2'>
						${price}
					</Typography>
					{children}
					</CardContent>
					<CardActions>
						<PopupButton
							popup={GoodInfoDialog}
							props={{good}}
							sx={{mr: 'auto'}}
						>
							Show more
						</PopupButton>
						{actionButtons}
					</CardActions>
			</Card>
		</Grid>
	);
}

export default CardComponent;