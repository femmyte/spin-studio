import React from 'react';
import EdtechCard from './EdtechCard';

const Edtech = () => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 gap-x-[9.74rem] py-[3.38rem] px-4 md:px-[6.25rem] gap-y-[1.5rem]'>
			<EdtechCard />
			<EdtechCard second gray />
			<EdtechCard gray />
			<EdtechCard second />
		</div>
	);
};

export default Edtech;
