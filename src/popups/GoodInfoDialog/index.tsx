import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, ImageList, ImageListItem, Stack } from '@mui/material';
import React from 'react';
import { useAppSelector } from 'hooks/redux';
import { IAnyGood, IOrder, IPopup } from 'models';
import QtyTextField from './QtyTextField';
import ImageOverlay from 'components/ImageOverlay';

interface Props extends IPopup {
	good: IAnyGood
}

const GoodInfoDialog: React.FC<Props> = ({isOpen, handleClose, good}) => {
	const {title, description, images, price, category: {name: category}, isOrder} = good;
	const isAuth = useAppSelector(state => state.auth.isAuth);

	const imgData = images.map(url => ({url, rows: 1}));
	imgData[0].rows = 2;

	const imageList = imgData.map(({url, rows}) => {
		const img = <img
			src={url}
			loading="lazy"
			width='100%'
		/>;

		return (
			<ImageListItem key={url} rows={rows}>
				<ImageOverlay title={title} img={img} />
				{img}
			</ImageListItem>
		);
	});

	return (
		<Dialog open={isOpen} onClose={handleClose} aria-labelledby='good-info-dialog-title'>
			<DialogTitle id='good-info-dialog-title'>
				<Stack direction='row'>
					<Box sx={{marginY: 'auto'}}>
						{title}
					</Box>
					{isOrder &&
						<Box sx={{ml: 'auto'}}>
							quantity: {(good as IOrder).quantity}
						</Box>
					}
				</Stack>
			</DialogTitle>
			<DialogContent sx={{pb: 0}}>
				<DialogContentText>{description}</DialogContentText>

				<ImageList cols={2} rowHeight={164} variant="quilted">
					{imageList}
				</ImageList>

				<DialogContentText>
					Category: {category}
				</DialogContentText>
				<DialogContentText>
					Price: ${price}
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} sx={{mt: 'auto'}}>
					Cancel
				</Button>
				{isAuth && <QtyTextField good={good}/>}
			</DialogActions>
		</Dialog>
	);
}

export default GoodInfoDialog;