import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, ImageList, ImageListItem } from '@mui/material';
import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import useDialog from '../../hooks/useDialog';
import { IAnyGood } from '../../models';
import QtyTextField from './QtyTextField';

interface Props {
	button: (handler: () => void) => JSX.Element
	good: IAnyGood
}

const GoodInfoDialog: React.FC<Props> = ({button, good}) => {
	const {title, description, images, price, category: {name: category}} = good;
	const {open, buttonOpen, handleClose} = useDialog(button);
	const isAuth = useAppSelector(state => state.auth.isAuth);

	const imgData = images.map(url => ({url, rows: 1}));
	imgData[0].rows = 2;

	return (
		<>
			{buttonOpen}
			<Dialog open={open} onClose={handleClose} aria-labelledby='good-info-dialog-title'>
				<DialogTitle id='good-info-dialog-title'>{title}</DialogTitle>
				<DialogContent sx={{pb: 0}}>
					<DialogContentText>{description}</DialogContentText>

					<ImageList cols={2} rowHeight={164} variant="quilted">
						{imgData.map(({url, rows}) => (
							<ImageListItem key={url} rows={rows}>
								<img
									src={url}
									loading="lazy"
								/>
							</ImageListItem>
						))}
					</ImageList>

					<DialogContentText>
						Category: {category}
					</DialogContentText>
					<DialogContentText>
						Price: {price}$
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} sx={{mt: 'auto'}}>
						Cancel
					</Button>
					{isAuth && <QtyTextField good={good}/>}
				</DialogActions>
			</Dialog>
		</>
	);
}

export default GoodInfoDialog;