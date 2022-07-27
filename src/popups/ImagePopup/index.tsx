import React from 'react';
import { Box, Dialog, DialogContent, DialogTitle, IconButton, Stack } from '@mui/material';
import { Close } from '@mui/icons-material';
import { IPopup } from 'models';

interface Props extends IPopup {
	title: string,
	img: JSX.Element
}

const ImagePopup: React.FC<Props> = ({isOpen, handleClose, img, title}) => {
	return (
		<Dialog open={isOpen} onClose={handleClose} aria-labelledby='image-dialog-title'>
			<DialogTitle id='image-dialog-title'>
				<Stack direction='row'>
					<Box sx={{marginY: 'auto'}}>
						{title}
					</Box>
					<IconButton onClick={handleClose} sx={{ml: 'auto'}}>
						<Close />
					</IconButton>
				</Stack>
			</DialogTitle>
			<DialogContent>
				{img}
			</DialogContent>
		</Dialog>
	);
}

export default ImagePopup;