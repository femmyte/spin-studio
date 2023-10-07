import Link from 'next/link';
import React from 'react';

const ButtonLink = ({ text, link, color }) => {
	return (
		<Link
			href={link ? link : '#'}
			className={`${
				color ? `text-${color}` : 'text-white'
			} rounded-[7.29444rem] py-[0.75rem] px-4 border border-primaryYellow `}
		>
			{text}
		</Link>
	);
};

export default ButtonLink;
