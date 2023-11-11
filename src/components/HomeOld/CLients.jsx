import Image from 'next/image';
import React from 'react';

const CLients = () => {
	return (
		<section className='pt-[3rem] md:pt-[8rem] pb-[3rem] md:pb-[7rem] bg-white px-4 md:px-[10.7rem]'>
			<h2 className='font-[700] text-black leading-normal text-center mb-10 md:mb-[4rem] text-[2rem] md:text-[4rem]'>
				Featured Clients
			</h2>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-0'>
				<div className='relative w-full md:w-[22.3125rem] h-[12.3125rem] border'>
					<Image
						src={'/images/clients/labcorps.png'}
						alt='client image'
						fill
					/>
				</div>
				<div className='relative w-full md:w-[22.3125rem] h-[12.3125rem] border'>
					<Image
						src={'/images/clients/labcorps.png'}
						alt='client image'
						fill
					/>
				</div>
				<div className='relative w-full md:w-[22.3125rem] h-[12.3125rem] border'>
					<Image
						src={'/images/clients/labcorps.png'}
						alt='client image'
						fill
					/>
				</div>
				<div className='relative w-full md:w-[22.3125rem] h-[12.3125rem] border'>
					<Image
						src={'/images/clients/labcorps.png'}
						alt='client image'
						fill
					/>
				</div>
				<div className='relative w-full md:w-[22.3125rem] h-[12.3125rem] border'>
					<Image
						src={'/images/clients/labcorps.png'}
						alt='client image'
						fill
					/>
				</div>
				<div className='relative w-full md:w-[22.3125rem] h-[12.3125rem] border'>
					<Image
						src={'/images/clients/labcorps.png'}
						alt='client image'
						fill
					/>
				</div>
			</div>
		</section>
	);
};

export default CLients;
