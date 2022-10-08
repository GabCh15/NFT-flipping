/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.metagamehub.io', 'lh3.googleusercontent.com'],
  },
  env: {
    CLIENT_ID: process.env.NEXT_PUBLIC_CLIENT_ID,
  },
}

module.exports = nextConfig
