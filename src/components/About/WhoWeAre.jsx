import React from 'react';
import { IBM_Plex_Sans } from 'next/font/google';
import Image from 'next/image';
import CustomCarousel from '../common/CustomCarousel';
const ibm = IBM_Plex_Sans({
	subsets: ['latin'],
	weight: ['300', '400', '500', '700'],
});

const ValueCard = ({ title, text }) => {
	return (
		<div className='px-[2rem] py-[1.5rem] bg-white rounded-[1.5625rem] shadow-md flex flex-col justify-center items-center w-full md:w-[24.6875rem]'>
			<Image
				src={'/images/icons/pen-tool.svg'}
				height={'32'}
				width={32}
				alt='icon'
			/>
			<p className='mt-[0.62rem] text-secondaryBlack text-center text-[1rem] font-[600] leading-[130%]'>
				{title}
			</p>
			<p className='mt-[1rem] text-secondaryBlack text-center text-[1rem] font-[300] leading-[147%] tracking-[0.03125rem]'>
				{text}
			</p>
		</div>
	);
};
const TeamCard = () => {
	return (
		<div className='w-[20.75rem] '>
			<div className='w-[20.75rem] h-[17.5625rem] relative'>
				<Image src={'/images/team/one.png'} alt='team img' fill />
			</div>
			<p className='text-[#6a6a6a] text-[1rem] font-[500] leading-[210.9%] tracking-[0.01rem] mt-[1.38rem]'>
				CEO
			</p>
			<p className='text-black text-[1.125rem] font-[600] leading-[210.9%] tracking-[0.01125rem] mt-[0.56rem]'>
				John kabras
			</p>
		</div>
	);
};
const WhoWeAre = () => {
	return (
		<section className=' py-[2rem] md:py-[3.44rem]'>
			<div
				className={`${ibm.className} flex flex-col items-center justify-center px-4 md:px-[10.27rem] py-[3.81rem] md:px-[7.69rem]`}
			>
				<h1 className='text-[2.5rem] md:text-[4rem] text-secondaryBlack text-center font-[700] leading-[139%] capitalize tracking-[0.1rem]'>
					Who We Are
				</h1>
				<p className='text-[1.2rem] md:text-[1.5625rem] text-secondaryBlack text-center font-[400] md:leading-[216.687%]  leading-[160.3%] mt-[2rem] tracking-[0.03906rem]'>
					Spin is a digital creative branding agency that combines
					creativity, innovation, technology and industry knowledge to
					help businesses create a unique brand identity that stands
					out and captivates the right audience. We help to nurture
					every business imaginations and give life to ideas that can
					transform brands into works of art.
				</p>
			</div>
			<div className='pl-3 md:pl-[7.69rem]'>
				<h1 className='text-black text-[1.5rem] font-[500] leading-[170%] mb-[3rem]'>
					Our Team
				</h1>
				{/* <div className='w-full md:w-[80%] mx-auto transition-all duration-600 ease-in-out'>
					<CustomCarousel />
				</div> */}
				<div className='flex gap-x-[3rem] overflow-hidden'>
					<TeamCard />
					<TeamCard />
					<TeamCard />
					<TeamCard />
					<TeamCard />
				</div>
			</div>
			<div className='px-4 md:px-[7.69rem] mt-[3rem]'>
				<h1 className='text-black text-[1.5rem] font-[500] leading-[170%] mb-[3rem]'>
					Our Values
				</h1>
				<div className='flex flex-col md:flex-row  gap-[1rem]'>
					<ValueCard
						title={'Creativity and Innovation'}
						text={
							'We foster a culture of creativity, where innovation flourishes. We believe in thinking outside the box, pushing boundaries and exploring new ideas to deliver fresh, captivating solutions.'
						}
					/>
					<ValueCard
						title={'Client- Centric approach'}
						text={
							'Our clients are at the heart of everything we do. We are dedicated to understanding their unique needs and working collaboratively to achieve their goals. Our clients success is our ultimate priority.'
						}
					/>
					<ValueCard
						title={'Collaboration and Teamwork'}
						text={
							'We believe that the best work is achieved through collaboration. Our agency values the diverse talents and perspectives of our team members , as well as the collaborative relationships we build with our clients. '
						}
					/>
				</div>
			</div>
		</section>
	);
};

export default WhoWeAre;
