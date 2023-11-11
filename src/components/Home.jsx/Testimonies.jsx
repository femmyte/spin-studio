import React from 'react';
import { Handlee } from 'next/font/google';

const handlee = Handlee({
	subsets: ['latin'],
	weight: ['400'],
});
const Testimonies = () => {
	return (
		<div className='py-[6.5rem]  w-full md:w-[76.75rem] mx-auto'>
			<p className='mb-[1.5rem] text-black text-[1.5rem] font-[400] leading-normal text-center'>
				Kawme Johnson, KwamePrep CEO
			</p>
			<h1
				className={`${handlee.className} text-[#242424] text-center text-[3.25rem] font-[400] leading-[4.1875rem]`}
			>
				The superb organization around the production, combined with the
				outstanding professionalism of the entire team was at the core
				of the success of our project.
			</h1>
		</div>
	);
};

export default Testimonies;
