import React from 'react';
const Card = ({ date, title, brand }) => (
	<div className='px-4 py-[0.75rem] rounded-[0.375rem] border-b border-b-naturalWhite w-full md:w-[23.625rem]  text-naturalWhite duration-200 hover:bg-primaryYellow hover:text-black hover:border-none'>
		<p className='text-[0.75rem] font-[400] leading-normal text-left'>
			{date}
		</p>
		<p className='mb-8 text-[2rem] my-4 font-[500] leading-normal'>
			{title}
		</p>
		<p className='text-[0.75rem] font-[400] leading-normal text-left'>
			{brand}
		</p>
	</div>
);
const Drop = () => {
	return (
		<section className='py-[3rem] md:pt-[8rem] md:pb-[10.5rem] bg-black px-4 md:px-[7.44rem]'>
			<h2 className='font-[700] text-naturalWhite leading-normal text-center mb-[4rem] text-[3rem] md:text-[4rem]'>
				The Drop
			</h2>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-y-[4rem] gap-x-[5rem]'>
				<Card
					date={'June 5 2023'}
					title={
						'Unlocking the science of Colors: A Guide to RGB, CMYK, and PMS'
					}
					brand={'Creative and Branding'}
				/>
				<Card
					date={'June 5 2023'}
					title={
						'Unlocking the science of Colors: A Guide to RGB, CMYK, and PMS'
					}
					brand={'Creative and Branding'}
				/>
				<Card
					date={'June 5 2023'}
					title={
						'Unlocking the science of Colors: A Guide to RGB, CMYK, and PMS'
					}
					brand={'Creative and Branding'}
				/>
			</div>
		</section>
	);
};

export default Drop;
