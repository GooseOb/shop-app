import { Alert, Snackbar } from '@mui/material';
import React, { useState } from 'react';

interface Props {
	button: (handler: () => void) => JSX.Element
}

const SignupSnackbar: React.FC<Props> = ({button}) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const buttonOpen = button(handleOpen);

	return (
		<>
			{buttonOpen}
			<Snackbar
				open={open}
				autoHideDuration={6000}
				onClose={handleClose}
			>
				<Alert severity='info'>
					You don't have to register, fill in the fields with any data
				</Alert>
			</Snackbar>
		</>
	);
}

export default SignupSnackbar;