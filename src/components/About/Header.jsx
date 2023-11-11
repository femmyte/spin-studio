'use client';
import React, { useState } from 'react';
import ButtonLink from '../common/ButtonLink';
import { Tilt_Neon } from 'next/font/google';
import Sidebar from '../common/navigation/Sidebar';
import Nav from '../common/navigation/Nav';
import Image from 'next/image';
import ReactPlayer from 'react-player';

const tilt = Tilt_Neon({ subsets: ['latin'] });
const Header = ({ children }) => {
	const [showSidebar, setShowSidebar] = useState(false);

	const handleOpen = () => {
		setShowSidebar(!showSidebar);
	};
	return (
		<>
			{!showSidebar && <Nav handleOpen={handleOpen} />}
			<div className={` ${showSidebar && 'min-h-max'} grid grid-cols-8 `}>
				<aside
					className={` ${
						showSidebar ? 'col-span-full md:col-span-2' : 'hidden'
					} bg-primaryYellow `}
				>
					<Sidebar handleOpen={handleOpen} />
				</aside>
				<header
					className={`${
						showSidebar
							? 'hidden md:block md:col-span-6 md:pr-[8rem] md:pl-0'
							: 'col-span-full '
					} text-center px-4  py-[3.12rem] bg-black  flex flex-col justify-center md:justify-start `}
				>
					<div
						className={`h-[65vh] md:h-full flex flex-col justify-center`}
					>
						<h1
							className={`${tilt.className} ${
								showSidebar
									? 'text-[1.8rem] md:text-[4.7rem]'
									: 'text-[1.8rem] md:text-[5.7rem]'
							} text-naturalWhite font-[400]  font-tilt leading-normal `}
						>
							About{' '}
							<span className=' text-primaryYellow'>
								Spin Designs
							</span>
						</h1>
						{/* <img src={'/images/aboutbg.png'} alt='about bg' /> */}
						<div className='w-screen '>
							<video
								autoPlay
								muted
								width='100%'
								height='341px'
								// className='min-w-screen max-h-[341px]'
								src={'/images/about.mp4'}
							></video>
						</div>
					</div>
					{/* <div className={`${showSidebar ? 'md:mt-0' : 'mt-[3rem]'}`}>
						<p className='md:w-[68rem] text-white font-[700] text-[1.5rem] leading-[3.5425rem] mx-auto text-center'>
							Spin Designs stands as a prominent design agency
							headquartered in Nigeria, dedicated to bringing
							delight to users on the opposite side of the screen,
							whether they`re startups or Fortune 500 companies.
						</p>
					</div> */}
				</header>
			</div>
		</>
	);
};

export default Header;
