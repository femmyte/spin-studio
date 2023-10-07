import Link from 'next/link';
import React from 'react';

const ButtonLink = ({ text, link, color }) => {
	return (
		<Link
			href={link ? link : '#'}
			className={`${
				color ? `text-${color} hover:text-black` : 'text-white'
			} rounded-[7.29444rem] py-[0.75rem] px-4 border border-primaryYellow hover:bg-primaryYellow hover:text-black `}
		>
			{text}
		</Link>
	);
};

export default ButtonLink;
