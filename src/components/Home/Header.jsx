'use client';
import React, { useState } from 'react';
import ButtonLink from '../common/ButtonLink';
import { Tilt_Neon } from 'next/font/google';
import Sidebar from '../common/navigation/Sidebar';
import Nav from '../common/navigation/Nav';

const tilt = Tilt_Neon({ subsets: ['latin'] });
const Header = ({ children }) => {
	const [showSidebar, setShowSidebar] = useState(false);

	const handleOpen = () => {
		setShowSidebar(!showSidebar);
	};
	return (
		<>
			{!showSidebar && <Nav handleOpen={handleOpen} />}
			<div className={` ${showSidebar && 'h-screen'} grid grid-cols-8 `}>
				<aside
					className={` ${
						showSidebar
							? 'col-span-full h-screen md:col-span-2'
							: 'hidden'
					} bg-primaryYellow `}
				>
					<Sidebar handleOpen={handleOpen} />
				</aside>
				<header
					className={`${
						showSidebar
							? 'hidden md:block md:col-span-6 md:pr-[8rem] md:pl-0'
							: 'col-span-full md:px-[6rem]'
					} text-center px-4  py-[3.12rem] bg-black  flex flex-col justify-center md:justify-start `}
				>
					<div className={`h-full flex flex-col justify-center`}>
						<h1
							className={`${tilt.className} ${
								showSidebar
									? 'text-[1.8rem] md:text-[4.7rem]'
									: 'text-[1.8rem] md:text-[5.7rem]'
							} text-naturalWhite font-[600]  font-tilt leading-normal`}
						>
							WE ARE A UIUX DESIGNER, GRAPHICS DESIGN{' '}
							<span className=' text-primaryYellow'>
								& IDENTITY DESIGN AGENCY
							</span>
						</h1>
					</div>
					<div className={`${showSidebar ? 'mt-0' : 'mt-[3rem]'}`}>
						<ButtonLink text={'VIEW WORK'} link={'#'} />
					</div>
				</header>
			</div>
		</>
	);
};

export default Header;
