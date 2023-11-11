import React from 'react';
import { IBM_Plex_Sans } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
const ibm = IBM_Plex_Sans({
	subsets: ['latin'],
	weight: ['300', '400', '500', '700'],
});
const HearFromYou = () => {
	return (
		<div className='w-screen h-[19rem] px-[1.9rem] py-[1.81rem] overflow-hidden'>
			<div className='border border-dashed border-[#c4c4c4] h-[85.5rem] w-[85.5rem] rounded-[87.5rem] mx-auto flex justify-center'>
				<div className=''>
					<p className='mt-[3.12rem] text-[#666] text-[1.25rem] font-[500] leading-[155.687%] mb-[0.75rem] text-center'>
						Let us in on your project
					</p>
					<p
						className={`text-secondaryBlack text-[1.625rem] font-[500] leading-[160%] capitalize ${ibm.className} text-center`}
					>
						We want to hear from you
					</p>
					<div className='w-[4rem] mx-auto my-[0.75rem]'>
						<Link href={'#'} className='block'>
							<Image
								src={'/images/icons/tabcol.svg'}
								alt='new tab icon'
								height={31}
								width={31}
							/>
						</Link>
					</div>
					<p className='w-[34.875rem] text-[#121212] text-[1rem] font-[400] leading-[216.68%] tracking-wide mx-auto text-center'>
						We help to nurture every business imaginations and give
						life to ideas that can transform brands into works of
						art.
					</p>
				</div>
			</div>
		</div>
	);
};

export default HearFromYou;
