'use client';

import React from 'react';
import Link from 'next/link';
import { HamburgerMenu, NavigationDesktopMenu, SearchBar } from './index';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { ModeToggle } from './mode-toggle';

const Navbar = () => {
	const matches = useMediaQuery('(min-width: 768px)');

	return (
		<nav>
			<div className="max-w-7xl mx-auto py-8 px-6">
				<div className="flex items-center justify-between">
					<h1 className="font-bold lg:text-lg">
						<Link href="/">Fendie</Link>
					</h1>
					{matches && (
						<>
							<NavigationDesktopMenu />
							<ModeToggle />
						</>
					)}
					{!matches && (
						<div className="flex items-center gap-4">
							<ModeToggle />
							<HamburgerMenu />
						</div>
					)}
				</div>
				<SearchBar />
			</div>
		</nav>
	);
};

export default Navbar;
