'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillCloseCircle, AiOutlineClose } from 'react-icons/ai';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';

const MainSidebar = ({ handleOpen, handleShowServiceBar }) => (
	<aside className='w-full flex flex-col justify-between h-full mb-0 p-0'>
		<div className=''>
			<div className='flex justify-end'>
				<div
					className='flex m-4 w-[2.625rem] h-[2.625rem] justify-center items-center rounded-full bg-white cursor-pointer'
					onClick={handleOpen}
				>
					<AiOutlineClose size={24} />
				</div>
			</div>
			<div className='flex justify-center'>
				<p className='font-roboto text-[1.9rem] md:text-[2.5rem] font-[500] leading-normal text-naturalWhite'>
					Spin<span className='text-secondaryBlack'>D</span>
				</p>
			</div>
			<div className='flex items-center h-[70%] md:h-[70vh] ml-[2rem]'>
				<ul>
					<li className='mb-[0.62rem]'>
						<Link
							href={'/'}
							className='text-[1rem] md:text-[1.375rem] text-naturalWhite font-[400] lr leading-normal'
						>
							HOME
						</Link>
					</li>

					<li className='mb-[0.62rem]'>
						<Link
							href={'/'}
							className='text-[1rem] md:text-[1.375rem] text-naturalWhite font-[400] lr leading-normal'
						>
							ABOUT
						</Link>
					</li>
					<li className='mb-[0.62rem]'>
						<button
							className='text-[1rem] md:text-[1.375rem] text-naturalWhite font-[400] lr leading-normal flex gap-x-[4rem] items-center'
							onClick={handleShowServiceBar}
						>
							<span>SERVICES</span>
							<PiCaretRightBold />
						</button>
					</li>
					<li className='mb-[0.62rem]'>
						<Link
							href={'/'}
							className='text-[1rem] md:text-[1.375rem] text-naturalWhite font-[400] lr leading-normal'
						>
							BLOG
						</Link>
					</li>
					<li className='mb-[0.62rem]'>
						<Link
							href={'/'}
							className='text-[1rem] md:text-[1.375rem] text-naturalWhite font-[400] lr leading-normal'
						>
							CONTACT
						</Link>
					</li>
				</ul>
			</div>
		</div>
		<div className='self-end h-[4rem] w-full bg-black flex flex-col justify-center items-center m-0'>
			<p className='font-roboto text-[1rem] font-[400] leading-[2.45881rem] text-naturalWhite text-center'>
				Spin<span className='text-primaryYellow'>Designs</span>
			</p>
		</div>
	</aside>
);
const Servicesidebar = ({ handleShowServiceBar }) => (
	<aside className='w-full h-screen md:h-full flex flex-col justify-center px-[2rem]'>
		<button
			className='flex items-center mb-[2rem] '
			onClick={handleShowServiceBar}
		>
			<div className='flex mr-2 w-[1.5rem] h-[1.5rem] justify-center items-center rounded-full bg-white cursor-pointer'>
				<PiCaretLeftBold />
			</div>
			<span>Back</span>
		</button>

		<ul>
			<li className='mb-[0.62rem]'>
				<Link
					href={'/'}
					className='text-[1rem] md:text-[1.375rem] text-naturalWhite font-[400] lr leading-normal'
				>
					UI/UX
				</Link>
			</li>

			<li className='mb-[0.62rem]'>
				<Link
					href={'/'}
					className='text-[1rem] md:text-[1.375rem] text-naturalWhite font-[400] lr leading-normal'
				>
					GRAPHIC DESIGN
				</Link>
			</li>
			<li className='mb-[0.62rem]'>
				<Link
					href={'/'}
					className='text-[1rem] md:text-[1.375rem] text-naturalWhite font-[400] lr leading-normal'
				>
					BRAND DESIGN
				</Link>
			</li>
			<li className='mb-[0.62rem]'>
				<Link
					href={'/'}
					className='text-[1rem] md:text-[1.375rem] text-naturalWhite font-[400] lr leading-normal'
				>
					WEB DESIGN
				</Link>
			</li>
			<li className='mb-[0.62rem]'>
				<Link
					href={'/'}
					className='text-[1rem] md:text-[1.375rem] text-naturalWhite font-[400] lr leading-normal'
				>
					MOBILE DEVELOPMENT
				</Link>
			</li>
			<li className='mb-[0.62rem]'>
				<Link
					href={'/'}
					className='text-[1rem] md:text-[1.375rem] text-naturalWhite font-[400] lr leading-normal'
				>
					WEB DEVELOPMENT
				</Link>
			</li>
		</ul>
	</aside>
);
const Sidebar = ({ handleOpen }) => {
	const [showServiceBar, setShowServiceBar] = useState(false);

	const handleShowServiceBar = () => {
		setShowServiceBar(!showServiceBar);
	};
	if (showServiceBar) {
		return <Servicesidebar handleShowServiceBar={handleShowServiceBar} />;
	}
	return (
		<MainSidebar
			handleOpen={handleOpen}
			handleShowServiceBar={handleShowServiceBar}
		/>
	);
};

export default Sidebar;
