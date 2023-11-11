import React from 'react';
const Card = ({ title, content }) => (
	<div className='px-8 py-6 text-white duration-200 hover:bg-primaryYellow hover:text-black'>
		<h3 className='mb-8 text-[1.7rem] md:text-[2.25rem] font-[500] leading-normal'>
			{title}
		</h3>
		<p className='text-[1.125rem] font-[400] leading-[1.864rem] md:text-justify'>
			{content}
		</p>
	</div>
);
const Abilities = () => {
	return (
		<section className='pt-[8rem] pb-10 md:pb-[13.62rem] bg-black px-4 md:px-[7.44rem]'>
			<h2 className='font-[700] text-naturalWhite leading-normal text-center mb-[4rem] text-[2rem] md:text-[4rem]'>
				Our Abilities
			</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-[4rem] gap-x-[2rem]'>
				<Card
					title={'Renowned, Award-Winning Web Design'}
					content={
						'SpinS is an award-winning, renowned, experienced web design company 			helping customers worldwide improve their digital visibility. Our agency incorporates innovative UX or UI designs in order to complement your business. We embrace your approval and input to make your website look appealing and impactful to the targeted audience. Our main purpose is to offer a seamless and highly enriched experience in the process of developing your site.'
					}
				/>
				<Card
					title={'Renowned, Award-Winning Web Design'}
					content={
						'SpinS is an award-winning, renowned, experienced web design company 			helping customers worldwide improve their digital visibility. Our agency incorporates innovative UX or UI designs in order to complement your business. We embrace your approval and input to make your website look appealing and impactful to the targeted audience. Our main purpose is to offer a seamless and highly enriched experience in the process of developing your site.'
					}
				/>
				<Card
					title={'Renowned, Award-Winning Web Design'}
					content={
						'SpinS is an award-winning, renowned, experienced web design company 			helping customers worldwide improve their digital visibility. Our agency incorporates innovative UX or UI designs in order to complement your business. We embrace your approval and input to make your website look appealing and impactful to the targeted audience. Our main purpose is to offer a seamless and highly enriched experience in the process of developing your site.'
					}
				/>
				<Card
					title={'Renowned, Award-Winning Web Design'}
					content={
						'SpinS is an award-winning, renowned, experienced web design company 			helping customers worldwide improve their digital visibility. Our agency incorporates innovative UX or UI designs in order to complement your business. We embrace your approval and input to make your website look appealing and impactful to the targeted audience. Our main purpose is to offer a seamless and highly enriched experience in the process of developing your site.'
					}
				/>
			</div>
		</section>
	);
};

export default Abilities;
