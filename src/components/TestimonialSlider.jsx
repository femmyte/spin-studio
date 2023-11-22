'use client';
import React, { useState, useEffect } from 'react';
import { Handlee } from 'next/font/google';

const handlee = Handlee({
	subsets: ['latin'],
	weight: ['400'],
});
const testimonialData = [
	{
		id: 1,
		author: 'Kawme Johnson, KwamePrep CEO',
		message:
			'The superb organization around the production, combined with the outstanding professionalism of the entire team was at the core of the success of our project.',
	},
	{
		id: 2,
		author: 'Azzim Aina, Boltpets CEO',
		message:
			"The remarkable efficiency in production coordination, coupled with the exceptional professionalism exhibited by the entire team, formed the foundation of our project's triumph",
	},
	{
		id: 3,
		author: 'Tosin Fakile, DevCent CEO',
		message:
			'The superb organization around the production, combined with the outstanding professionalism of the entire team was at the core of the success of our project.',
	},
];

const TestimonialSlider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const goToSlide = (index) => {
		setCurrentSlide(index);
	};

	const goToPrevSlide = () => {
		setCurrentSlide((prevSlide) =>
			prevSlide === 0 ? testimonialData.length - 1 : prevSlide - 1
		);
	};

	const goToNextSlide = () => {
		setCurrentSlide((prevSlide) =>
			prevSlide === testimonialData.length - 1 ? 0 : prevSlide + 1
		);
	};

	useEffect(() => {
		const interval = setInterval(goToNextSlide, 6000); // Change slide every 6 seconds

		return () => clearInterval(interval);
	}, [currentSlide]);

	return (
		<div className='h-[55vh] max-h-[80vh] my-[6.5rem]  w-full md:w-[76.75rem] mx-auto relative flex flex-col justify-between'>
			{/* <div className='bg-white h-full  p-4 relative'> */}
			<div className='mb-4 flex items-center justify-center min-h-max relative'>
				{testimonialData.map((testimonial, index) => (
					<div
						key={index}
						className={`text-lg absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
							index === currentSlide ? 'opacity-100' : 'opacity-0'
						}`}
					>
						<p className='mb-[1.5rem] text-black text-[1.5rem] font-[400] leading-normal text-center'>
							{testimonial.author}
						</p>
						<h1
							className={`${handlee.className} text-[#242424] text-center text-[1.6rem] md:text-[3.25rem] font-[400] leading-[2.5rem] md:leading-[4.1875rem]`}
						>
							{testimonial.message}
						</h1>
					</div>
				))}
			</div>
			<div className='flex justify-center '>
				{testimonialData.map((_, index) => (
					<button
						key={index}
						onClick={() => goToSlide(index)}
						className={`mx-2 ${
							index === currentSlide
								? 'bg-[#121212]'
								: 'bg-[#D9D9D9]'
						} w-[82.703px] h-[3.243px] rounded-[54.054rem]`}
					>
						{/* {index + 1} */}
					</button>
				))}
			</div>
			{/* <div className='flex justify-center'>
					<button
						className='bg-blue-500 text-white px-4 py-2 rounded mr-2'
						onClick={goToPrevSlide}
					>
						Previous
					</button>
					<button
						className='bg-blue-500 text-white px-4 py-2 rounded'
						onClick={goToNextSlide}
					>
						Next
					</button>
				</div> */}
			{/* </div> */}
		</div>
	);
};

export default TestimonialSlider;
