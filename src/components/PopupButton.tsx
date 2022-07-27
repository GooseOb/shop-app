import { PropsOf } from '@emotion/react';
import { Button } from '@mui/material';
import React from 'react';
import usePopup from 'hooks/usePopup';
import { IPopup } from 'models';

type buttonType = typeof Button;
type ButtonProps = PropsOf<buttonType>;

interface Props extends ButtonProps {
	popup: React.FC<any>,
	props?: object
}

const PopupButton: React.FC<Props> = ({
	children,
	popup: Popup,
	props: popupProps = {},
	...props
}) => {
	const {isOpen, handleOpen, handleClose} = usePopup();

	const popup: IPopup = {isOpen, handleClose};

	return (
		<>
			<Button onClick={handleOpen} {...props}>
				{children}
			</Button>
			<Popup {...popup} {...popupProps} />
		</>
	);
}

export default PopupButton;