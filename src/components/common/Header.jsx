'use client';
import React, { useState } from 'react';
import { IBM_Plex_Sans } from 'next/font/google';
import Nav from './navigation/Nav';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import { BsArrowUpRight } from 'react-icons/bs';
const ibm = IBM_Plex_Sans({
	subsets: ['latin'],
	weight: ['300', '400', '500', '700'],
});

const RevealNav = ({ handleOpen }) => {
	return (
		<section className=' w-screen flex justify-end pt-[2rem] pr-[2rem] z-[200]'>
			<div className='bg-[#F3F5FA] w-[37.5rem] h-[31.25rem] rounded-[3.125rem] opacity-100 pt-[2rem] pr-[3rem]'>
				<div
					className='flex items-center justify-end gap-x-[1rem] cursor-pointer'
					onClick={handleOpen}
				>
					<span className='text-[1.125rem] font-[400] leading-normal'>
						close
					</span>
					<div className='flex w-[2.625rem] h-[2.625rem] justify-center items-center rounded-full bg-black cursor-pointer'>
						<AiOutlineClose size={24} color='white' />
					</div>
				</div>
				<div className='flex items-center mt-[3.62rem] ml-[3rem]'>
					<ul>
						<li className='mb-[0.62rem]'>
							<Link
								href={'/'}
								className='text-[1.5rem] md:text-[2rem] text-black font-[400] lr leading-normal'
							>
								HOME
							</Link>
						</li>

						<li className='mb-[0.62rem]'>
							<Link
								href={'/about'}
								className='text-[1.5rem] md:text-[2rem] text-black font-[400] lr leading-normal'
							>
								ABOUT
							</Link>
						</li>

						<li className='mb-[0.62rem]'>
							<Link
								href={'/services'}
								className='text-[1.5rem] md:text-[2rem] text-black font-[400] lr leading-normal'
							>
								SERVICES
							</Link>
						</li>
						<li className='mb-[0.62rem]'>
							<Link
								href={'/contact'}
								className='text-[1.5rem] md:text-[2rem] text-black font-[400] lr leading-normal'
							>
								CONTACT
							</Link>
						</li>
					</ul>
				</div>
				<div className='mt-[4.5rem] ml-[3rem] flex items-center gap-x-[1.44rem]'>
					<p className='font-[400] text-[1rem] leading-[150%]'>
						hello@spindesigns.io
					</p>
					<BsArrowUpRight />
				</div>
			</div>
		</section>
	);
};
const Header = ({ title, text, about }) => {
	const [showNav, setShowNav] = useState(false);

	const handleOpen = () => {
		setShowNav(!showNav);
	};
	return (
		<>
			{showNav && (
				<>
					<div class='absolute inset-0 bg-black opacity-50 h-screen w-screen'></div>
					<div className='absolute'>
						<RevealNav handleOpen={handleOpen} />
					</div>
				</>
			)}
			<header className={`${about ? 'h-[70vh]' : 'h-screen'} `}>
				<Nav handleOpen={handleOpen} />
				<div
					className={`${
						ibm.className
					} flex flex-col items-center justify-center px-4 md:px-[12.31rem] ${
						about ? 'mt-[1rem]' : 'mt-[5.62rem]'
					}`}
				>
					<h1 className='text-[6.287rem] text-secondaryBlack text-center font-[600] leading-[139%] capitalize'>
						{title}
					</h1>
					<p className='text-[1.82769rem] text-secondaryBlack text-center font-[300] leading-[155.687%] capitalize  mt-[0.98rem] tracking-[0.04569rem]'>
						{text}
					</p>
				</div>
			</header>
		</>
	);
};

export default Header;
