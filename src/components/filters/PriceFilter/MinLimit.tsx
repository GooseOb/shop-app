import React from 'react';
import { useAppSelector } from 'hooks/redux';
import { setMinPriceLimit } from 'store/reducers/filterSlice';
import LimitTextField from './LimitTextField';

const MinLimit: React.FC = () => {
	const minLimit = useAppSelector(state => state.filter.minPriceLimit);

	return (
		<LimitTextField
			label='min'
			value={minLimit}
			setValue={setMinPriceLimit}
		/>
	);
}

export default MinLimit;