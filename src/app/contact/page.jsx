'use client';
import Animation from '@/components/common/Animation';
import Nav from '@/components/common/navigation/Nav';
import Link from 'next/link';
import { Roboto } from 'next/font/google';
import React, { useState } from 'react';
import { AiFillMail, AiOutlineClose } from 'react-icons/ai';
import { BsArrowUpRight } from 'react-icons/bs';
const roboto = Roboto({
	subsets: ['latin'],
	weight: ['300', '400', '500', '700'],
});
// const RevealNav = ({ handleOpen }) => {
// 	return (
// 		<section className=' w-screen flex justify-end pt-[2rem] pr-[2rem] z-[200]'>
// 			<div className='bg-[#F3F5FA] w-[37.5rem] h-[31.25rem] rounded-[3.125rem] opacity-100 pt-[2rem] pr-[3rem]'>
// 				<div
// 					className='flex items-center justify-end gap-x-[1rem] cursor-pointer'
// 					onClick={handleOpen}
// 				>
// 					<span className='text-[1.125rem] font-[400] leading-normal'>
// 						close
// 					</span>
// 					<div className='flex w-[2.625rem] h-[2.625rem] justify-center items-center rounded-full bg-black cursor-pointer'>
// 						<AiOutlineClose size={24} color='white' />
// 					</div>
// 				</div>
// 				<div className='flex items-center mt-[3.62rem] ml-[3rem]'>
// 					<ul>
// 						<li className='mb-[0.62rem]'>
// 							<Link
// 								href={'/'}
// 								className='text-[1.5rem] md:text-[2rem] text-black font-[400] lr leading-normal'
// 							>
// 								HOME
// 							</Link>
// 						</li>

// 						<li className='mb-[0.62rem]'>
// 							<Link
// 								href={'/about'}
// 								className='text-[1.5rem] md:text-[2rem] text-black font-[400] lr leading-normal'
// 							>
// 								ABOUT
// 							</Link>
// 						</li>

// 						<li className='mb-[0.62rem]'>
// 							<Link
// 								href={'/services'}
// 								className='text-[1.5rem] md:text-[2rem] text-black font-[400] lr leading-normal'
// 							>
// 								SERVICES
// 							</Link>
// 						</li>
// 						<li className='mb-[0.62rem]'>
// 							<Link
// 								href={'/contact'}
// 								className='text-[1.5rem] md:text-[2rem] text-black font-[400] lr leading-normal'
// 							>
// 								CONTACT
// 							</Link>
// 						</li>
// 					</ul>
// 				</div>
// 				<div className='mt-[4.5rem] ml-[3rem] flex items-center gap-x-[1.44rem]'>
// 					<p className='font-[400] text-[1rem] leading-[150%]'>
// 						hello@spindesigns.io
// 					</p>
// 					<BsArrowUpRight />
// 				</div>
// 			</div>
// 		</section>
// 	);
// };
const RevealNav = ({ handleOpen }) => {
	return (
		<section className=' w-screen flex justify-end md:pt-[2rem] md:pr-[2rem] z-[100]'>
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
const Item = ({ text }) => {
	return (
		<div className='px-[1rem] py-[0.25rem] border border-[#5B5B5B]'>
			<p className='font-[400] text-[0.875rem] leading-[180%] capitalize text-[#5B5B5B]'>
				{text}
			</p>
		</div>
	);
};
const Contact = () => {
	const [showNav, setShowNav] = useState(false);

	const handleOpen = () => {
		setShowNav(!showNav);
	};
	return (
		<>
			<Animation style='fade-up' placement='top-bottom' className='-z-10'>
				<div className='bg-[#101010] md:h-screen w-screen'>
					{showNav && (
						<div className='z-50'>
							<Animation
								style='fade-down'
								header
								placement='top-bottom'
							>
								<div class='absolute inset-0 bg-black opacity-50 h-screen w-screen'></div>
								<div className='absolute'>
									<RevealNav handleOpen={handleOpen} />
								</div>
							</Animation>
						</div>
					)}
					{/* <Animation
					style='fade-down'
					placement='top-bottom'
					className='z-20'
				> */}
					<Nav contact handleOpen={handleOpen} />
					{/* </Animation> */}
					{/* <Animation
					style='fade-up'
					placement='top-bottom'
					className='-z-10'
				> */}
					<div className='px-4 md:px-[13.25rem] '>
						<div className='flex md:hidden py-4 md:py-0 justify-center items-center gap-x-4'>
							<AiFillMail className='text-primaryYellow text-[1.5rem]' />
							<p className='text-primaryYellow font-[700] text-[1.5rem] leading-[14o%] capitalize'>
								Contact Us
							</p>
						</div>
						<p className=' text-[#f3f5fa] md:mt-[-1rem] text-[1.25rem] font-[700] leading-[140%] tracking-[0.25rem] text-center md:text-left'>
							Your information
						</p>
						<div className='mt-[1rem]'>
							<div className='flex flex-col md:flex-row gap-y-6 items-center gap-x-[2.5rem]'>
								<input
									type='text'
									className=' outline-none bg-transparent text-[#5B5B5B] mt-[1rem] border-b border-b-[#5B5B5B] px-4 w-full md:w-[31rem] text-[1.25rem] font-[400] leading-[180%] capitalize'
									placeholder='first name'
								/>
								<input
									type='text'
									className=' outline-none bg-transparent text-[#5B5B5B] mt-[1rem] border-b border-b-[#5B5B5B] px-4  w-full md:w-[31rem]  text-[1.25rem] font-[400] leading-[180%] capitalize'
									placeholder='last name'
								/>
							</div>
							<div className='flex flex-col md:flex-row gap-y-6 items-center gap-x-[2.5rem] mt-[1rem]'>
								<input
									type='text'
									className=' outline-none bg-transparent text-[#5B5B5B] mt-[1rem] border-b border-b-[#5B5B5B] px-4  w-full md:w-[31rem] text-[1.25rem] font-[400] leading-[180%] capitalize'
									placeholder='country/region'
								/>
								<input
									type='text'
									className=' outline-none bg-transparent text-[#5B5B5B] mt-[1rem] border-b border-b-[#5B5B5B] px-4  w-full md:w-[31rem]  text-[1.25rem] font-[400] leading-[180%] capitalize'
									placeholder='Company'
								/>
							</div>
							<div className='flex flex-col md:flex-row gap-y-6 items-center gap-x-[2.5rem] mt-[1.5rem]'>
								<input
									type='email'
									className=' outline-none bg-transparent text-[#5B5B5B] mt-[1rem] border-b border-b-[#5B5B5B] px-4 w-full md:w-[31rem] text-[1.25rem] font-[400] leading-[180%] capitalize'
									placeholder='Email address'
								/>
								<input
									type='tel'
									className=' outline-none bg-transparent text-[#5B5B5B] mt-[1rem] border-b border-b-[#5B5B5B] px-4  w-full md:w-[31rem]  text-[1.25rem] font-[400] leading-[180%] capitalize'
									placeholder='phone number'
								/>
							</div>
							<p className='mt-[1.5rem] text-[#f3f5fa] text-[1.25rem] font-[700] leading-[140%] tracking-[0.25rem] text-center md:text-left'>
								Your Request
							</p>
							<p className='mt-[0.75rem] mb-[0.5rem] text-[#5B5B5B] text-[1.25rem] font-[400] leading-[180%] capitalize'>
								Services
							</p>
							<div className='flex flex-wrap gap-y-4 justify-center md:justify-normal items-center gap-x-[1rem]'>
								<Item text={'UI/UX'} />
								<Item text={'Brand Design'} />
								<Item text={'Web Development'} />
								<Item text={'Mobile Development'} />
								<Item text={'Software Development'} />
							</div>
							<div className='mt-4 md:mt-0'>
								<textarea
									cols={30}
									className=' outline-none bg-transparent text-[#5B5B5B] mt-[1rem] border-b border-b-[#5B5B5B] md:px-4  w-full text-[0.85rem] md:text-[1.25rem] font-[400] leading-[180%] capitalize h-[6rem] '
									placeholder='Tell us more about your project'
								></textarea>
							</div>
							<div className='flex py-4 md:pb-0 justify-center md:justify-end mt-[0.5rem]'>
								<button className='px-[1.5rem] py-[0.62rem] border border-[#5B5B5B] font-[400] text-[0.875rem] leading-[180%] capitalize text-[#5B5B5B] rounded-[0.375rem]'>
									Send
								</button>
							</div>
						</div>
					</div>
				</div>
			</Animation>
		</>
	);
};

export default Contact;
