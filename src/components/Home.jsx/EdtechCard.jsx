import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['300', '400', '500', '700'],
});
const EdtechCard = ({ second, gray }) => {
	return (
		<div
			className={`${second && 'md:mt-[8.12rem]'} ${
				gray ? 'bg-[#ebebeb]' : 'bg-cardbg'
			} ${
				roboto.className
			} rounded-[1.40913rem]  px-[1.99rem] pt-[2.82rem] overflow-x-hidden h-max`}
		>
			<div className='flex items-center justify-between mb-[0.56rem]'>
				<div className=''>
					<p className='text-[#484848] text-[1rem] font-[500] leading-[155.687%] tracking-[0.025rem] mb-[0.21rem] text-left'>
						Edctech
					</p>
					<p
						className={`${roboto.className} text-[#484848] text-center font-roboto text-[1.75rem] font-[500] leading-[155.687%] tracking-[0.04375rem]`}
					>
						DEVCENT
					</p>
				</div>
				<Link href={'#'} className='flex items-center'>
					<span className='text-[#484848] text-center font-roboto text-[1.125rem] font-[400] leading-[155.687%] tracking-[0.02813rem]'>
						View website
					</span>
					<Image
						src={'/images/icons/tab.svg'}
						alt='new tab icon'
						height={24}
						width={24}
					/>
				</Link>
			</div>
			<div className=''>
				<div className=''>
					<p className='text-black font-roboto text-[0.875rem] font-[500] leading-[155.687%] tracking-[0.02188rem] mb-[0.28rem]'>
						2023
					</p>
					<p className='text-secondaryBlack font-roboto text-[1rem] font-[400] leading-[155.687%] tracking-[0.025rem] mb-[0.28rem] w-full md:w-[25.08263rem]'>
						DevCent is an internet-based educational platform
						created to provide learners with sought-after
						technological competencies.
					</p>
				</div>
				<div className='mt-[1.69rem] flex gap-x-[2.37rem]'>
					<p className='text-black font-roboto text-[0.875rem] font-[400] leading-[155.687%] tracking-[0.02188rem]'>
						Website
					</p>
					<p className='text-black font-roboto text-[0.875rem] font-[400] leading-[155.687%] tracking-[0.02188rem]'>
						UX/UI
					</p>
					<p className='text-black font-roboto text-[0.875rem] font-[400] leading-[155.687%] tracking-[0.02188rem]'>
						Branding
					</p>
				</div>
			</div>
			<div className='mt-[4.04rem] md:ml-[3.66rem] relative w-[44.51613rem] h-[25.93875rem]'>
				<Image src={'/images/devcent.png'} alt='devcent' fill />
			</div>
		</div>
	);
};

export default EdtechCard;
