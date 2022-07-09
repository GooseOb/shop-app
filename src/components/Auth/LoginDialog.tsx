import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import AuthContext from '../../context/Auth';
import SignupSnackbar from './SignupSnackbar';

interface Props {
	button: (handler: () => void) => JSX.Element
}

const LoginDialog: React.FC<Props> = ({button}) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const buttonOpen = button(handleOpen);

	const {login} = useContext(AuthContext);
	const logIn = () => {
		handleClose();
		login();
	};

	return (
		<>
			{buttonOpen}
			<Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
				<DialogTitle id='form-dialog-title'>Log in</DialogTitle>
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
						autoFocus
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