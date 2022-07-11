import React from 'react';
import { Box, Stack, TextField, Typography } from '@mui/material';

type limitSetter = React.Dispatch<React.SetStateAction<number>>;

interface Props {
	limits: {
		maxPriceLimit: number,
		minPriceLimit: number
	},
	limitSetters: {
		setMaxPriceLimit: limitSetter,
		setMinPriceLimit: limitSetter
	}
}

type changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => void;

const PriceFilter: React.FC<Props> = ({limits, limitSetters}) => {
	const {setMaxPriceLimit, setMinPriceLimit} = limitSetters;
	const {maxPriceLimit, minPriceLimit} = limits;
 
	const getHangler = (setPriceLimit: limitSetter) => (e: React.ChangeEvent<HTMLInputElement>) => {
		let num = +e.target.value;
		if (isNaN(num)) return;
		if (num > 1000) num = 1000
		else if (num < 0) num = 0;
		setPriceLimit(num);
	};
 
	const onChangeMax = getHangler(setMaxPriceLimit);
	const onChangeMin = getHangler(setMinPriceLimit);

	const getTextField = (label: string, onChange: changeHandler, value: number) =>
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

	return (
		<Stack direction='row' sx={{mr: 'auto'}}>
			<Typography sx={{marginY: 'auto'}} variant='body1'>
				Price: from
			</Typography>
			{getTextField('min', onChangeMin, minPriceLimit)}
			<Typography sx={{marginY: 'auto'}} variant='body1'>
				to
			</Typography>
			{getTextField('max', onChangeMax, maxPriceLimit)}
		</Stack>
	);
}

export default PriceFilter;