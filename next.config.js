/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['admin.borgfy.com'],
  },
  // images:{
  //   unoptimized: true
  // },
  // assetPrefix: '/../public/'
}

module.exports = nextConfig
