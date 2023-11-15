'use client';
import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import ScrollTrigger from 'react-scroll-trigger';

const Animation = ({ children, style, placement, header }) => {
	const [counterOn, setCounterOn] = useState(false);
	// if(style === 'flip')
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
	return (
		<ScrollTrigger
			onEnter={() => setCounterOn(true)}
			// onExit={() => setCounterOn(false)}
		>
			<div
				data-aos={style}
				anchorPlacement='bottom'
				// data-aos-anchor-placement={placement ? placement : ''}
				data-aos-easing={`${header ? 'linear' : 'ease-out-cubic'} `}
				data-aos-duration='2000'
				data-aos-offset='0'
				style={{ zIndex: 0 }}
			>
				{children}
			</div>
		</ScrollTrigger>
	);
};

export default Animation;
