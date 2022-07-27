import React from 'react';
import classes from './ImageOverlay.module.sass';
import Search from '@mui/icons-material/Search';
import { IPopup } from 'models';
import usePopup from 'hooks/usePopup';
import ImagePopup from 'popups/ImagePopup';

const iconStyles = {
	position: 'absolute',
	fill: 'white',
	fontSize: '3rem'
};

interface Props {
	title: string,
	img: JSX.Element
}

const ImageOverlay: React.FC<Props> = ({title, img}) => {
	const {isOpen, handleOpen, handleClose} = usePopup();

	const popup: IPopup = {isOpen, handleClose};

	return (
		<>
			<div
				onClick={handleOpen}
				className={classes.overlay}
			>
				<Search sx={iconStyles} />
			</div>
			<ImagePopup {...popup} img={img} title={title} />
		</>
	);
}

export default ImageOverlay;