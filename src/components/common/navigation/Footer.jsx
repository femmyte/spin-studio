import Image from 'next/image';
import React from 'react';
import { AiFillMail, AiOutlineCopyrightCircle } from 'react-icons/ai';
import {
	MdMailOutline,
	MdOutlineLocationOn,
	MdOutlinePhone,
} from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';
import { Roboto } from 'next/font/google';
import Link from 'next/link';

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['300', '400', '500', '700'],
});
const Footer = () => {
	return (
		<footer
			className={`${roboto.className} bg-black px-4 md:px-[5.25rem] pt-[5.5rem] pb-[3.4rem]`}
		>
			<section className='flex flex-col md:flex-row justify-between'>
				<div className='w-full md:w-[18rem]'>
					<Image
						src={'/images/logo.svg'}
						alt='spinstudio logo'
						height={40}
						width={104}
						className='mx-auto md:mx-0'
					/>
					<p className='text-footerWhite font-[400] text-[1rem] leading-[1.5rem] mt-[1.62rem]'>
						We help businesses have a lasting impact on customers by
						crafting captivating Designs and Development that stands
						out.
					</p>
				</div>
				<div className='flex justify-around my-[2rem] md:my-0'>
					{/* <div className='md:ml-[5.88rem]'>
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
					</div> */}
					<div className='md:ml-[6.12rem]'>
						<h5 className='text-[1rem] text-primaryYellow font-[700] leading-[1.375rem] mb-[1.62rem] '>
							Company
						</h5>
						<ul>
							<li className='text-footerWhite font-[500] text-[1rem] leading-[1.5rem] mb-[1rem]'>
								Portfolio
							</li>
							<li className='text-footerWhite font-[500] text-[1rem] leading-[1.5rem] mb-[1rem]'>
								<Link href={'/services'}>Services</Link>
							</li>
							<li className='text-footerWhite font-[500] text-[1rem] leading-[1.5rem] mb-[1rem]'>
								<Link href={'/about'}>About Us</Link>
							</li>
							<li className='text-footerWhite font-[500] text-[1rem] leading-[1.5rem] mb-[1rem]'>
								<Link href={'/contact'}>Contact Us</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className='md:ml-[6.12rem]'>
					<h5 className='text-[1rem] text-primaryYellow font-[700] leading-[1.375rem] mb-[1.62rem] text-center md:text-left'>
						Join a Newsletter
					</h5>
					<label
						htmlFor='email'
						className='text-footerWhite font-[500] text-[1rem] leading-[1.5rem] mb-[0.62rem] block'
					>
						Your Email
					</label>
					<div className='flex flex-col md:flex-row gap-y-4 gap-x-4'>
						<input
							type='email'
							placeholder='Enter Your Email'
							className='border border-primaryYellow bg-[#1D1600] h-[3.5rem] w-full md:w-[18.5rem] pl-3 text-footerWhite '
						/>
						<button className='px-[3rem] py-4 text-[0.875rem] font-[500] leading-[1.3125rem] text-secondaryBlack bg-primaryYellow rounded-[0.5rem]'>
							Subscribe
						</button>
					</div>
					<div className='flex justify-center md:justify-start mt-[1.38rem] gap-x-4'>
						<div className='h-[2.5rem] w-[2.5rem] flex justify-center items-center bg-primaryYellow rounded-full'>
							<a
								href='http://twitter.com/spindesigns'
								target='_blank'
								rel='noopener '
							>
								<span className='text-4 font-[700] '>X</span>
							</a>
						</div>
						<div className='h-[2.5rem] w-[2.5rem] flex justify-center items-center bg-primaryYellow rounded-full'>
							{/* <a
								href='https://instagram.com/spindesignss?igshid=MTNiYzNiMzkwZA%3D%3D&utm_source=qr'
								target='_blank'
								rel='noopener '
							> */}
							<span className='text-4 font-[700] '>In</span>
							{/* </a> */}
						</div>
						<div className='h-[2.5rem] w-[2.5rem] flex justify-center items-center bg-primaryYellow rounded-full'>
							<a
								href='https://www.facebook.com/spindesignss?mibextid=LQQJ4d'
								target='_blank'
								rel='noopener '
							>
								<span className='text-4 font-[700] '>f</span>
							</a>
						</div>
						<div className='h-[2.5rem] w-[2.5rem] flex justify-center items-center bg-primaryYellow rounded-full'>
							{/* <span className='text-4 font-[700] '>f</span> */}
							<a
								href='https://instagram.com/spindesignss?igshid=MTNiYzNiMzkwZA%3D%3D&utm_source=qr'
								target='_blank'
								rel='noopener '
							>
								<FaInstagram />
							</a>
						</div>
					</div>
				</div>
			</section>
			<div className='w-full h-[1px] bg-primaryYellow my-[2.5rem]'></div>
			<section className='flex flex-col md:flex-row gap-y-6 justify-between items-start'>
				<div className='flex items-center gap-x-2 w-[14rem]'>
					<AiOutlineCopyrightCircle className='text-white text-[1.5rem]' />
					<p className='text-footerWhite font-[400] text-[1rem] leading-[1.5rem]'>
						Spin Designs{' '}
					</p>
				</div>
				<div className='flex flex-col md:flex-row gap-y-6 md:items-start z gap-x-[2.5rem]'>
					<div className='flex items-start gap-x-4 '>
						<img src='/images/icons/location_on.svg' />
						{/* <IoLocationOutline
							size={40}
							className='text-primaryYellow '
						/> */}
						<p className='text-footerWhite font-[400] text-[1rem] leading-[1.5rem] w-[11.75rem]'>
							House 4B, Seidu Ayodeji Balogun Street, Ibara
							Housing Estate, Abeokuta
						</p>
					</div>
					<div className='flex items-center gap-x-4'>
						<MdMailOutline className='text-primaryYellow text-[1.5rem]' />
						<p className='text-footerWhite font-[400] text-[1rem] leading-[1.5rem]'>
							hello@spindesigns.io
						</p>
					</div>
					<div className='flex items-center gap-x-4'>
						<MdOutlinePhone className='text-primaryYellow text-[1.5rem]' />
						<p className='text-footerWhite font-[400] text-[1rem] leading-[1.5rem]'>
							+234 8037782683
						</p>
					</div>
				</div>
			</section>
		</footer>
	);
};

export default Footer;
