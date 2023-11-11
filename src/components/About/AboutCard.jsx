import Image from 'next/image';
import React from 'react';

const AboutCard = () => {
	return (
		<div className='flex gap-[4.75rem] items-center mb-[8rem]'>
			<article>
				<p className='text-white text-[1.5rem] font-[500] leading-[3.5625rem] '>
					Spin Designs has a rare talent for combining aesthetics and
					functionality in their products, which is something I truly
					appreciate.
				</p>
				<p className='mt-[2.75rem] font-[700] text-primaryYellow text-[1.5rem] leading-[2.25rem] '>
					Theresa Williamson
				</p>
			</article>
			{/* <div className='w-[29.625rem] h-[34.75rem] relative'> */}
			<Image
				src={'/images/aboutman.png'}
				alt='about ii'
				height={200}
				width={200}
				className='w-[29.625rem] h-[34.75rem] '
			/>
			{/* </div> */}
		</div>
	);
};

export default AboutCard;
