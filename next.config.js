/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

// To fix resend in next js 14

const path = require('path');
const { NormalModuleReplacementPlugin } = require('webpack');

webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
	config.plugins = config.plugins || [];
	config.plugins.push(new NormalModuleReplacementPlugin(/email\/render/, path.resolve(__dirname, './renderEmailFix.js')));
	// Important: return the modified config
	return config;
};
