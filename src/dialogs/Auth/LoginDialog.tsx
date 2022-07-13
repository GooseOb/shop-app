import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import React from 'react';
import PopupButton from '../../components/PopupButton';
import { IPopup } from '../../models';
import SignupSnackbar from './SignupSnackbar';

interface Props extends IPopup {
	login: () => void
}

const LoginDialog: React.FC<Props> = ({isOpen, handleClose, login}) => {
	return (
		<Dialog open={isOpen} onClose={handleClose} aria-labelledby='login-dialog-title'>
			<DialogTitle id='login-dialog-title'>Log in</DialogTitle>
			<DialogContent>
				<DialogContentText>Log in to make orders</DialogContentText>
				<TextField
					autoFocus
					fullWidth
					margin='dense'
					id='name'
					label='Email'
					type='email'
				/>
				<TextField
					fullWidth
					margin='dense'
					id='pass'
					label='Password'
					type='password'
				/>
			</DialogContent>
			<DialogActions>
				<PopupButton
					title='Sign up'
					popup={(props) => (
						<SignupSnackbar {...props} />
	 				)}
					sx={{mr: 'auto'}}
				/>
				<Button onClick={handleClose}>
					Cancel
				</Button>
				<Button onClick={login}>
					Log in
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export default LoginDialog;