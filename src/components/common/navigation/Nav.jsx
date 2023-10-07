import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ButtonLink from '../ButtonLink';

const Nav = () => {
	return (
		<div className='flex justify-between items-center px-4 md:px-[6.25rem] py-[1.56rem] bg-black'>
			<Image
				src={'/images/logo.svg'}
				alt='Spin studio logo'
				height={40}
				width={130}
			/>
			<div className='flex gap-x-[1.5rem] items-center'>
				<div className='hidden md:block'>
					<ButtonLink text={'START A PROJECT'} link={'#'} />
				</div>
				<Image
					src={'/images/icons/hamburger.svg'}
					alt='hamburger'
					height={56}
					width={56}
				/>
			</div>
		</div>
	);
};

export default Nav;
