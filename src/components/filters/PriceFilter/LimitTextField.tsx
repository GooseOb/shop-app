import React from 'react';
import { TextField } from '@mui/material';
import { useAppDispatch } from 'hooks/redux';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { AppDispatch } from 'store';

type limitSetter = ActionCreatorWithPayload<number, string>;

type eventType = React.ChangeEvent<HTMLInputElement>;
type changeHandler = (e: eventType) => void;
type handlerGetter = (setter: limitSetter, dispatch: AppDispatch) => changeHandler;

interface Props {
	label: string,
	value: number | string,
	setValue: limitSetter
}

const getHangler: handlerGetter = (setValue, dispatch) => (e) => {
	let num = +e.target.value;
	if (isNaN(num)) return;
	if (num > 1000) num = 1000
	else if (num < 0) num = 0;
	dispatch(setValue(num));
};

const LimitTextField: React.FC<Props> = ({label, value, setValue}) => {
	const dispatch = useAppDispatch();
 
	const onChange = getHangler(setValue, dispatch);

	return (
		<TextField
			label={label}
			value={value || ''}
			onChange={onChange}
			variant='standard'
			sx={{
				marginX: '.5rem',
				mb: '1rem',
				width: '4rem'
			}}
		/>
	);
}

export default LimitTextField;