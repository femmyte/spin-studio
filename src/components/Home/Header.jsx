import React from 'react';
import ButtonLink from '../common/ButtonLink';

const Header = ({ children }) => {
	return (
		<header className='text-center px-[4rem] py-[3.12rem] bg-black h-[83vh] '>
			<h1 className='text-naturalWhite font-[600] text-[4rem] font-oswald leading-normal'>
				WE ARE A UIUX DESIGNER, GRAPHICS DESIGN{' '}
				<span className=' text-primaryYellow'>
					& IDENTITY DESIGN AGENCY
				</span>
			</h1>
			<div className='mt-[3.38rem]'>
				<ButtonLink text={'VIEW WORK'} link={'#'} />
			</div>
		</header>
	);
};

export default Header;
