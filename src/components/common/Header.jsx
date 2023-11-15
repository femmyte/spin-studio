'use client';
import React, { useState, useEffect, useRef } from 'react';
import { IBM_Plex_Sans, Roboto } from 'next/font/google';
import Nav from './navigation/Nav';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import { BsArrowUpRight } from 'react-icons/bs';
import Animation from './Animation';
const ibm = IBM_Plex_Sans({
	subsets: ['latin'],
	weight: ['300', '400', '500', '700'],
});
const roboto = Roboto({
	subsets: ['latin'],
	weight: ['300', '400', '500', '700'],
});
const RevealNav = ({ handleOpen }) => {
	return (
		<section className=' w-screen flex justify-end md:pt-[2rem] md:pr-[2rem] z-[200]'>
			<div className='bg-[#F3F5FA] w-full md:w-[37.5rem] h-[31.25rem] rounded-[3.125rem] opacity-100 pt-[2rem] pr-[3rem]'>
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
					<ul className={roboto.className}>
						<li className='mb-[0.62rem] hover:border-l-primaryYellow hover:border-l-[6px] duration-0 hover:duration-700 ease-out transition	'>
							<Link
								href={'/'}
								className='hover:text-[2.2rem] hover:ml text-[1.5rem] md:text-[2rem] text-black font-[400] lr leading-normal'
							>
								<span className='hover:ml-[1rem] duration-0 hover:duration-700 ease-out transition	'>
									HOME
								</span>
							</Link>
						</li>

						<li className='mb-[0.62rem] hover:border-l-primaryYellow hover:border-l-[6px] duration-0 hover:duration-700 ease-out transition	'>
							<Link
								href={'/about'}
								className='hover:text-[2.2rem] hover:ml text-[1.5rem] md:text-[2rem] text-black font-[400] lr leading-normal'
							>
								<span className='hover:ml-[1rem] duration-0 hover:duration-700 ease-out transition	'>
									ABOUT
								</span>
							</Link>
						</li>
						<li className='mb-[0.62rem] hover:border-l-primaryYellow hover:border-l-[6px] duration-0 hover:duration-700 ease-out transition	'>
							<Link
								href={'/services'}
								className='hover:text-[2.2rem] hover:ml text-[1.5rem] md:text-[2rem] text-black font-[400] lr leading-normal'
							>
								<span className='hover:ml-[1rem] duration-0 hover:duration-700 ease-out transition	'>
									SERVICES
								</span>
							</Link>
						</li>
						<li className='mb-[0.62rem] hover:border-l-primaryYellow hover:border-l-[6px] duration-0 hover:duration-700 ease-out transition	'>
							<Link
								href={'/contact'}
								className='hover:text-[2.2rem] hover:ml text-[1.5rem] md:text-[2rem] text-black font-[400] lr leading-normal'
							>
								<span className='hover:ml-[1rem] duration-0 hover:duration-700 ease-out transition	'>
									CONTACT
								</span>
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
	const cursorRef = useRef(null);

	useEffect(() => {
		const handleMouseMove = (e) => {
			const { clientX: x, clientY: y } = e;
			cursorRef.current.style.transform = `translate(${x}px, ${y}px)`;
		};

		document.addEventListener('mousemove', handleMouseMove);

		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);
	const handleOpen = () => {
		setShowNav(!showNav);
	};
	return (
		<section className='mouse-follow-container'>
			{showNav && (
				<Animation style='fade-down' header placement='top-bottom'>
					<div class='absolute inset-0 bg-black opacity-50 h-screen w-screen'></div>
					<div className='absolute'>
						<RevealNav handleOpen={handleOpen} />
					</div>
				</Animation>
			)}
			<header
				className={`${
					about ? 'h-max md:h-[70vh]' : 'h-max md:h-screen'
				} ${showNav && 'h-screen'} `}
			>
				<div ref={cursorRef} className='mouse-follower'></div>

				<Nav handleOpen={handleOpen} />
				<div
					className={`${
						ibm.className
					} flex flex-col items-center justify-center px-4 md:px-[12.31rem] ${
						about ? 'mt-[1rem]' : 'mt-[5.62rem]'
					} `}
				>
					{/* <div
						className='absolute w-16 h-16 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2'
						style={{ left: mousePosition.x, top: mousePosition.y }}
					></div> */}
					<h1
						className={`${ibm.className} ${
							about
								? 'text-[2.5rem] md:text-[5.17525rem]'
								: 'text-[2.5rem] md:text-[6.287rem]'
						} text-secondaryBlack text-center font-[600] leading-[139%] capitalize`}
					>
						{title}
					</h1>
					<p
						className={`${ibm.className}  ${
							about
								? 'text-6 md:text-[1.5625rem]'
								: 'text-6 md:text-[1.82769rem] '
						} text-secondaryBlack text-center font-[300] leading-[155.687%]  mt-[0.98rem] tracking-[0.04569rem]`}
					>
						{text}
					</p>
				</div>
			</header>
		</section>
	);
};

export default Header;
