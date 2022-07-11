import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import React from 'react';
import useDialog from '../../hooks/useDialog';
import SignupSnackbar from './SignupSnackbar';

interface Props {
	button: (handler: () => void) => JSX.Element,
	login: () => void
}

const LoginDialog: React.FC<Props> = ({button, login}) => {
	const {open, buttonOpen, handleClose} = useDialog(button);

	const logIn = () => {
		handleClose();
		login();
	};

	return (
		<>
			{buttonOpen}
			<Dialog open={open} onClose={handleClose} aria-labelledby='login-dialog-title'>
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
					<SignupSnackbar button={(handler) => (
						<Button
							sx={{mr: 'auto'}}
							onClick={handler}
						>
							Sign up
						</Button>
					)} />
					<Button onClick={handleClose}>
						Cancel
					</Button>
					<Button onClick={logIn}>
						Log in
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}

export default LoginDialog;