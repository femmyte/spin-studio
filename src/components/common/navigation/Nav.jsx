'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import ButtonLink from '../ButtonLink';
import { FiMenu } from 'react-icons/fi';
import { AiFillMail, AiOutlineClose } from 'react-icons/ai';

const Nav = ({ handleOpen, contact }) => {
	return (
		<>
			<div
				className={`flex justify-between items-center px-4 md:px-[1.95rem] py-[1.44rem] `}
			>
				<div className='flex items-center '>
					<Link href={'/'}>
						<Image
							src={'/images/logo.png'}
							alt='Spin studio logo'
							height={49}
							width={71}
						/>
					</Link>
					{contact && (
						<div className='hidden ml-[7rem] md:flex items-center gap-x-4'>
							<AiFillMail className='text-primaryYellow text-[1.5rem]' />
							<p className='text-primaryYellow font-[700] text-[1.5rem] leading-[14o%] capitalize'>
								Contact Us
							</p>
						</div>
					)}
				</div>

				<div
					className='flex gap-x-[1rem] items-center cursor-pointer'
					onClick={handleOpen}
				>
					{/* <div className='hidden md:block'>
					<ButtonLink text={'START A PROJECT'} link={'#'} />
				</div> */}
					<span
						className={`${
							contact ? 'text-white' : 'text-black'
						} text-4 font-[700] `}
					>
						Menu
					</span>
					<div
						className={`${
							contact
								? 'border-white bg-black'
								: 'border-black bg-white'
						} p-[0.6rem] flex justify-center items-center border  rounded-full`}
					>
						<FiMenu
							size={30}
							className={`${
								contact ? 'text-white' : 'text-black'
							}`}
						/>
						{/* </span> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default Nav;
