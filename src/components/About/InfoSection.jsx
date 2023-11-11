import React from 'react';
import AboutCard from './AboutCard';

const InfoSection = () => {
	return (
		<div className='px-3 md:px-[10.38rem] bg-black py-4'>
			<p className='md:w-[68rem] text-white font-[700] text-[1.5rem] leading-[3.5425rem] mx-auto text-center'>
				Spin Designs stands as a prominent design agency headquartered
				in Nigeria, dedicated to bringing delight to users on the
				opposite side of the screen, whether they`re startups or Fortune
				500 companies.
			</p>
			<p className='mt-[9.969rem] text-center font-[700] text-[3.5625rem] mb-[8rem]'>
				Word`s on the street
			</p>
			<div className=''>
				<AboutCard />
				<AboutCard />
				<AboutCard />
				<AboutCard />
				<AboutCard />
				<AboutCard />
				<AboutCard />
			</div>
		</div>
	);
};

export default InfoSection;
