'use client';

import React, { useState } from 'react';
import { LiaSearchSolid } from 'react-icons/lia';
import { MdOutlineCancel } from 'react-icons/md';

const SearchBar = () => {
	const [isActive, setIsActive] = useState<boolean>(true);

	return (
		<div className={`${isActive ? 'w-[300px]' : 'w-[40px]'} mx-auto relative h-[40px] bg-neutral-800 rounded-full overflow-hidden duration-200 mt-4 xl:my-6`}>
			<div className="absolute top-0 left-0 w-[40px] h-[40px] bg-neutral-800 rounded-full flex items-center justify-center z-20 cursor-pointer">
				<LiaSearchSolid onClick={() => setIsActive((prev) => !prev)} className="lg:scale-125" />
			</div>
			<div className="relative w-[220px] h-[40px] left-[40px] flex items-center justify-center">
				<input type="text" placeholder="Search" className="absolute top-0 w-full h-full border-none outline-none py-2 text-sm bg-neutral-800 xl:text-base" />
			</div>
			<MdOutlineCancel onClick={() => setIsActive(false)} className="absolute top-1/2 -translate-y-1/2 right-[15px] cursor-pointer lg:scale-125" />
		</div>
	);
};

export default SearchBar;
