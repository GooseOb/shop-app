import { useState } from "react";

type button = (handler: () => void) => JSX.Element;

const useDialog = (button: button) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const buttonOpen = button(handleOpen);

	return {open, buttonOpen, handleClose};
};

export default useDialog;