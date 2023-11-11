import Image from 'next/image';
import React from 'react';

const Images = () => {
	return (
		<div className='px-[8rem]'>
			<div className='flex gap-x-[3rem] items-end'>
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
			<div className='flex gap-x-[3rem] mt-[3rem]  justify-end'>
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
