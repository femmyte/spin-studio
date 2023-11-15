import Images from '@/components/About/Images';
import InfoSection from '@/components/About/InfoSection';
import WhoWeAre from '@/components/About/WhoWeAre';
import Header from '@/components/common/Header';
import HearFromYou from '@/components/common/HearFromYou';
import Footer from '@/components/common/navigation/Footer';
import React from 'react';

const ABOUT = () => {
	return (
		<div>
			<Header
				title={'About us'}
				text={
					'Helping businesses create a unique brand identity that stands out and captivates the right audience'
				}
				about
			/>
			<Images />
			<WhoWeAre />
			<HearFromYou />
			<div className='h-[6.31rem] w-full'></div>
			<Footer />
		</div>
	);
};

export default ABOUT;
