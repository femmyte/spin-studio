import Image from 'next/image';
import React from 'react';

const Images = () => {
	return (
		<div className='px-4 md:px-[8rem] mt-8 md:mt-0'>
			<div className='flex flex-col md:flex-row gap-y-5 gap-x-[3rem] items-end'>
				<Image
					src={'/images/about/small.png'}
					alt='img'
					width={345}
					height={518}
				/>
				<Image
					src={'/images/about/big.png'}
					alt='img'
					width={345}
					height={682}
				/>
				<Image
					src={'/images/about/small.png'}
					alt='img'
					width={345}
					height={518}
				/>
				<Image
					src={'/images/about/small.png'}
					alt='img'
					width={345}
					height={518}
				/>
			</div>
			<div className='flex flex-col md:flex-row gap-y-5 gap-x-[3rem] mt-[3rem]  justify-end'>
				<Image
					src={'/images/about/mid.png'}
					alt='img'
					width={723}
					height={1084}
				/>
				<Image
					src={'/images/about/mid.png'}
					alt='img'
					width={723}
					height={1084}
				/>
			</div>
		</div>
	);
};

export default Images;
