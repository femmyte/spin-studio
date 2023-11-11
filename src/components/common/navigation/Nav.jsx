'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import ButtonLink from '../ButtonLink';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

const Nav = ({ handleOpen }) => {
	return (
		<>
			<div
				className={`flex justify-between items-center px-4 md:px-[1.95rem] py-[1.44rem] z-[100]`}
			>
				<Image
					src={'/images/logo.png'}
					alt='Spin studio logo'
					height={49}
					width={71}
				/>

				<div
					className='flex gap-x-[1rem] items-center'
					onClick={handleOpen}
				>
					{/* <div className='hidden md:block'>
					<ButtonLink text={'START A PROJECT'} link={'#'} />
				</div> */}
					<span className='text-4 font-[700] '>Menu</span>
					<div className='p-[0.6rem] flex justify-center items-center border border-black bg-white rounded-full'>
						<FiMenu size={30} className='text-black' />
						{/* </span> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default Nav;
