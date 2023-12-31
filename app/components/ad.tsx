import React from 'react';

const Ad = ({ children }: { children: React.ReactNode }) => {
	return <section className="text-sm bg-yellow-600 text-white px-4 py-2 leading-6 text-center">{children}</section>;
};

export default Ad;
