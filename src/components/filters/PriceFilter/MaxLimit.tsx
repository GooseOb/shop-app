import React from 'react';
import { useAppSelector } from 'hooks/redux';
import { setMaxPriceLimit } from 'store/reducers/filterSlice';
import LimitTextField from './LimitTextField';

const MaxLimit: React.FC = () => {
	const maxLimit = useAppSelector(state => state.filter.maxPriceLimit);

	return (
		<LimitTextField
			label='max'
			value={maxLimit}
			setValue={setMaxPriceLimit}
		/>
	);
}

export default MaxLimit;