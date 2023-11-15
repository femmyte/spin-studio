import React from 'react';
import ServiceCard from './ServiceCard';
const services = [
	{
		title: 'Brand Design',
		description:
			'Brand design is the process of creating a visual identity that represents a brand. It involves crafting a distinctive and memorable visual language that communicates the essence and personality of a business or product.',
		image: 'brand',
		items: [
			'logo',
			'color palette ',
			'Typography',
			'component',
			'other visual elements',
		],
	},
	{
		title: 'UI/UX',
		description:
			'This focuses on the design and functionality of digital products such as websites, mobile apps and software. UI design ensures that the product is visually appealing, user friendly. UX design considers how users interact with the product and aims to make their journey smooth and enjoyable',
		image: 'uiux',
		items: [
			'user research',
			'wire framing',
			'prototyping',
			'interaction design',
			'mobile  design ',
			'web design',
		],
	},
	{
		title: 'Mobile Development',
		description:
			'Involves creating applications (apps) for smartphones and tablets. It includes both iOS (Apple) and Android (Google) platforms. Mobile development ensures that your app functions flawlessly on these devices, with a user-friendly interface.',
		image: 'mobile',
		items: [
			'UI/UX',
			'Mobile app design ',
			'iOS and Android Development',
			'Quality Assurance  ',
		],
	},
	{
		title: 'Web Development',
		description:
			"Involves building websites from the ground up. It covers both the front-end (what users see and interact with) and the back-end (the technical and functional aspects). It's not just about creating a website that looks great but also ensuring it's responsive, performs well, and offers a smooth experience.",
		image: 'web',
		items: [
			'UI/UX',
			'Front and back end development',
			'Back end',
			'API Integration',
			'Plug in  development',
			'Security and Data Protection',
		],
	},
	{
		title: 'Software Development',
		description:
			'involves creating custom software applications and systems which  can range from desktop applications to complex systems used in various industries. We help develop software solutions tailored to your specific needs',
		image: 'software',
		items: [
			'user research',
			'wire framing',
			'prototyping',
			'interaction design',
			'mobile  design ',
			'web design',
		],
	},
];
const ServicesComponent = () => {
	return (
		<div className='z-10 px-5 md:px-[10.62rem]  flex flex-col items-center justify-center gap-y-[4rem]'>
			{services.map((service, i) => (
				<div key={i}>
					<ServiceCard services={service} />
				</div>
			))}
		</div>
	);
};

export default ServicesComponent;
