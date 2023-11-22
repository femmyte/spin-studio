import React from 'react';
import { IBM_Plex_Sans } from 'next/font/google';
import Image from 'next/image';
import Animation from '../common/Animation';
const ibm = IBM_Plex_Sans({
	subsets: ['latin'],
	weight: ['300', '400', '500', '700'],
});
const ServiceCard = ({ services }) => {
	const { title, description, image, items } = services;
	return (
		<div className='flex flex-col-reverse md:flex-row md:gap-x-[1.44rem] items-center py-4 md:py-[4.5rem]  shadow rounded-[1.25rem] p-4'>
			<Animation style='fade-right' placement='top-bottom' header>
				<article className='w-full flex-1'>
					<h3
						className={`${ibm.className} mb-[1.03rem] text-secondaryBlack text-[2.25rem] font-[700] leading-[3.25rem] tracking-[0.01875rem]`}
					>
						{title}
					</h3>
					<p className='mb-[1.5rem] text-[#282828] text-[1.125rem] font-[400] leading-[2rem] tracking-[0.01875rem]'>
						{description}
					</p>

					<ul>
						{items.map((item, i) => (
							<li
								key={i}
								className='flex gap-x-[0.5rem] mb-[1.38rem] text-[#282828] text-[1.125rem] font-[400] leading-normal tracking-[0.01875rem]'
							>
								<Image
									src={'/images/icons/check.svg'}
									alt='list icon'
									height={'16'}
									width={'16'}
								/>{' '}
								<span>{item}</span>
							</li>
						))}
					</ul>
				</article>
			</Animation>
			<Animation style='fade-left' placement='top-bottom' header>
				{/* <div className='relative flex-1 h-[31.25rem] w-full md:w-[31.25rem]'>
					<Image
						src={`/images/services/${image}.png`}
						alt={title}
						fill
					/>
				</div> */}
				<div className='flex-1 h-[31.25rem] w-full md:w-[31.25rem]'>
					<img
						src={`/images/services/${image}.png`}
						className='h-full w-full z-0'
						alt={title}
					/>
				</div>
			</Animation>
		</div>
	);
};

export default ServiceCard;
