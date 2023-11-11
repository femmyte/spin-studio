import Edtech from '@/components/Home.jsx/Edtech';
import Testimonies from '@/components/Home.jsx/Testimonies';
import Header from '@/components/common/Header';
import HearFromYou from '@/components/common/HearFromYou';
import Footer from '@/components/common/navigation/Footer';
import React from 'react';

const HomePage = () => {
	return (
		<>
			<Header
				title={'Turning ideas into digital masterpiece'}
				text={
					'We help businesses have a lasting impact on customers by crafting captivating designs and Development that stands out.'
				}
			/>
			<Edtech />
			<Testimonies />
			<HearFromYou />
			<Footer />
		</>
	);
};

export default HomePage;
