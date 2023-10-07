import Image from 'next/image';
import React from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';
import ButtonLink from '../common/ButtonLink';
const Experience = () => {
	return (
		<section className='bg-[#EDEDED] pb-[5.6rem]'>
			<div className='flex flex-col justify-center items-center '>
				<div className='flex flex-col justify-center items-center bg-white rounded-full mt-[2rem] w-[3rem] md:w-[6rem] h-[3rem] md:h-[6rem]'>
					<AiOutlineArrowDown className='text-[20px] md:text-[5opx] animate-bounce' />
				</div>
				<h3 className='mt-[4rem] mb-[7rem] text-secondaryBlack text-[2rem] md:text-[4rem] font-[700] text-center'>
					Experiences We’ve crafted
				</h3>
			</div>
			<div className='grid gri-cols-1 md:grid-cols-3 gap-y-[1.5rem]'>
				<div className='relative h-[34.125rem] w-[30rem]'>
					<Image
						src={'/images/experiences/happy-man.png'}
						alt='experiencies image'
						fill
					/>
				</div>
				<div className='relative h-[34.125rem] w-[30rem]'>
					<Image
						src={'/images/experiences/group.png'}
						alt='experiencies image'
						fill
					/>
				</div>
				<div className='relative h-[34.125rem] w-[30rem]'>
					<Image
						src={'/images/experiences/diversity.png'}
						alt='experiencies image'
						fill
					/>
				</div>
				<div className='relative h-[34.125rem] w-[30rem]'>
					<Image
						src={'/images/experiences/young.png'}
						alt='experiencies image'
						fill
					/>
				</div>
				<div className='relative h-[34.125rem] w-[30rem]'>
					<Image
						src={'/images/experiences/team.png'}
						alt='experiencies image'
						fill
					/>
				</div>
				<div className='relative h-[34.125rem] w-[30rem]'>
					<Image
						src={'/images/experiences/young-i.png'}
						alt='experiencies image'
						fill
					/>
				</div>
			</div>
			<div className='flex justify-center mt-[5.6rem]'>
				<ButtonLink
					text={'VIEW MORE WORK'}
					link={'#'}
					color='primaryYellow'
				/>
			</div>
		</section>
	);
};

export default Experience;
