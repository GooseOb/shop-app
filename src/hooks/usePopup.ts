import { useState } from 'react';

const usePopup = () => {
	const [isOpen, setOpen] = useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return {isOpen, handleOpen, handleClose};
}

export default usePopup;