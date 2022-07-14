import { Alert, Snackbar } from '@mui/material';
import React from 'react';
import { IPopup } from '../../models';

// interface Props extends IPopup {
// }

const SignupSnackbar: React.FC<IPopup> = ({isOpen, handleClose}) => {
	return (
		<Snackbar
			open={isOpen}
			autoHideDuration={6000}
			onClose={handleClose}
		>
			<Alert severity='info'>
				You don't have to register, click on log in :)
			</Alert>
		</Snackbar>
	);
}

export default SignupSnackbar;