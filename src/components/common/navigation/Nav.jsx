import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ButtonLink from '../ButtonLink';
import { FiMenu } from 'react-icons/fi';

const Nav = ({ handleOpen }) => {
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
				<div
					className='h-[3.5rem] w-[3.5rem] flex justify-center items-center bg-primaryYellow rounded-full'
					onClick={handleOpen}
				>
					{/* <span className='text-4 font-[700] '> */}
					<FiMenu size={30} className='text-white' />
					{/* </span> */}
				</div>
			</div>
		</div>
	);
};

export default Nav;
