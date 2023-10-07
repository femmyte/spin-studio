import Image from 'next/image';
import React from 'react';
import { AiFillMail } from 'react-icons/ai';
import { MdOutlineLocationOn } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
const Footer = () => {
	return (
		<footer className='bg-black px-[5.25rem] pt-[5.5rem] pb-[3.4rem]'>
			<section className='flex '>
				<div className='w-[13.635rem]'>
					<Image
						src={'/images/logo.svg'}
						alt='spinstudio logo'
						height={40}
						width={104}
					/>
					<p className='text-footerWhite font-[400] text-[1rem] leading-[1.5rem] mt-[1.62rem] text-justify'>
						Our Studio is a digital agency UI / UX Design, Brand
						Design and Website Development located in Lagos State
						Nigeria.
					</p>
				</div>
				<div className='ml-[5.88rem]'>
					<h5 className='text-[1rem] text-primaryYellow font-[700] leading-[1.375rem] mb-[1.62rem] '>
						Service
					</h5>
					<ul>
						<li className='text-footerWhite font-[500] text-[1rem] leading-[1.5rem] mb-[1rem]'>
							Brand Design
						</li>
						<li className='text-footerWhite font-[500] text-[1rem] leading-[1.5rem] mb-[1rem]'>
							Mobile Design
						</li>
						<li className='text-footerWhite font-[500] text-[1rem] leading-[1.5rem] mb-[1rem]'>
							Motion Graphic
						</li>
						<li className='text-footerWhite font-[500] text-[1rem] leading-[1.5rem] mb-[1rem]'>
							Web Design
						</li>
						<li className='text-footerWhite font-[500] text-[1rem] leading-[1.5rem] mb-[1rem]'>
							Development
						</li>
						<li className='text-footerWhite font-[500] text-[1rem] leading-[1.5rem] mb-[1rem]'>
							SEO
						</li>
					</ul>
				</div>
				<div className='ml-[6.12rem]'>
					<h5 className='text-[1rem] text-primaryYellow font-[700] leading-[1.375rem] mb-[1.62rem] '>
						Company
					</h5>
					<ul>
						<li className='text-footerWhite font-[500] text-[1rem] leading-[1.5rem] mb-[1rem]'>
							Service
						</li>
						<li className='text-footerWhite font-[500] text-[1rem] leading-[1.5rem] mb-[1rem]'>
							Features
						</li>
						<li className='text-footerWhite font-[500] text-[1rem] leading-[1.5rem] mb-[1rem]'>
							Our Team
						</li>
						<li className='text-footerWhite font-[500] text-[1rem] leading-[1.5rem] mb-[1rem]'>
							Portfolio
						</li>
						<li className='text-footerWhite font-[500] text-[1rem] leading-[1.5rem] mb-[1rem]'>
							Blog
						</li>
						<li className='text-footerWhite font-[500] text-[1rem] leading-[1.5rem] mb-[1rem]'>
							Contact Us
						</li>
					</ul>
				</div>
				<div className='ml-[6.12rem]'>
					<h5 className='text-[1rem] text-primaryYellow font-[700] leading-[1.375rem] mb-[1.62rem] '>
						Join a Newsletter
					</h5>
					<label
						htmlFor='email'
						className='text-footerWhite font-[500] text-[1rem] leading-[1.5rem] mb-[0.62rem] block'
					>
						Your Email
					</label>
					<div className='flex gap-x-4'>
						<input
							type='email'
							placeholder='Enter Your Email'
							className='border border-primaryYellow bg-transparent h-[3.5rem] w-[18.5rem] pl-3 text-footerWhite '
						/>
						<button className='px-[3rem] py-4 text-[0.875rem] font-[500] leading-[1.3125rem] text-secondaryBlack bg-primaryYellow rounded-[0.5rem]'>
							Subscribe
						</button>
					</div>
					<div className='flex mt-[1.38rem] gap-x-4'>
						<div className='h-[2.5rem] w-[2.5rem] flex justify-center items-center bg-primaryYellow rounded-full'>
							<span className='text-4 font-[700] '>Dr</span>
						</div>
						<div className='h-[2.5rem] w-[2.5rem] flex justify-center items-center bg-primaryYellow rounded-full'>
							<span className='text-4 font-[700] '>In</span>
						</div>
						<div className='h-[2.5rem] w-[2.5rem] flex justify-center items-center bg-primaryYellow rounded-full'>
							<span className='text-4 font-[700] '>Ig</span>
						</div>
					</div>
				</div>
			</section>
			<div className='w-full h-[1px] bg-primaryYellow my-[2.5rem]'></div>
			<section className='flex justify-between items-center'>
				<p className='text-footerWhite font-[400] text-[1rem] leading-[1.5rem]'>
					Copyright Spin Designs{' '}
				</p>
				<div className='flex items-center gap-x-[2.5rem]'>
					<div className='flex items-center gap-x-4 w-[14rem]'>
						<MdOutlineLocationOn className='text-primaryYellow text-[1.5rem]' />
						<p className='text-footerWhite font-[400] text-[1rem] leading-[1.5rem]'>
							8819 Ohio St. South Gate, CA 90280
						</p>
					</div>
					<div className='flex items-center gap-x-4'>
						<AiFillMail className='text-primaryYellow text-[1.5rem]' />
						<p className='text-footerWhite font-[400] text-[1rem] leading-[1.5rem]'>
							spindesigns@spin.io
						</p>
					</div>
					<div className='flex items-center gap-x-4'>
						<BsTelephoneFill className='text-primaryYellow text-[1.5rem]' />
						<p className='text-footerWhite font-[400] text-[1rem] leading-[1.5rem]'>
							+1 386-688-3295
						</p>
					</div>
				</div>
			</section>
		</footer>
	);
};

export default Footer;
