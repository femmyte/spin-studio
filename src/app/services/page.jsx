import ServicesComponent from '@/components/Services';
import Header from '@/components/common/Header';
import HearFromYou from '@/components/common/HearFromYou';
import Footer from '@/components/common/navigation/Footer';
import React from 'react';

const Services = () => {
	return (
		<div>
			<Header
				title={'Our Services'}
				text={
					'Explore our creative services designed to transform your brand to make a lasting impact. '
				}
				about
			/>
			<ServicesComponent />
			<HearFromYou />
			<Footer />
		</div>
	);
};

export default Services;
