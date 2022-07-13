import { PropsOf } from '@emotion/react';
import { Button } from '@mui/material';
import React, { useState } from 'react';
import { IPopup } from '../models';

type ButtonProps = PropsOf<typeof Button>;

interface Props extends ButtonProps {
	title: string,
	popup: (props: IPopup) => JSX.Element,
}

const PopupButton: React.FC<Props> = ({title, popup, ...props}) => {
	const [isOpen, setOpen] = useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			<Button onClick={handleOpen} {...props}>
				{title}
			</Button>
			{popup({isOpen, handleClose})}
		</>
	);
}

export default PopupButton;