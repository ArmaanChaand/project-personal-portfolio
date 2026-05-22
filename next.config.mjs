/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
	images: {
		unoptimized: true, // or use a custom loader
	},
}

export default nextConfig
