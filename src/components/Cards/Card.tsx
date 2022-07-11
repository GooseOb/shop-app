import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, IconButton } from '@mui/material';
import { IAnyGood } from '../../models';
import GoodInfoDialog from '../../dialogs/GoodInfoDialog';

interface Props extends IAnyGood {
	amount?: number,
	children?: JSX.Element | JSX.Element[] | false,
	buttons?: {
		icon: JSX.Element,
		clickHandler: () => void
	}[] | false
}

const CardComponent: React.FC<Props> = ({children, buttons, ...props}) => {
	const {id, title, images: [image], price} = props;

	const actionButtons = buttons && buttons.map(({icon, clickHandler}) =>
		<IconButton onClick={clickHandler}>
			{icon}
		</IconButton>
	);

	return (
		<Grid item xs={12} md={3} key={id}>
			<Card>
				<CardMedia
					component='img'
					height='140'
					image={image}
				/>
				<CardContent
					sx={{
						padding: 1,
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
					<CardActions>
						<GoodInfoDialog
							button={(handler) => (
								<Button
									sx={{mr: 'auto'}}
									onClick={handler}
								>
									Show more
								</Button>
							)}
							good={props}
						/>
						{actionButtons}
					</CardActions>
			</Card>
		</Grid>
	);
}

export default CardComponent;