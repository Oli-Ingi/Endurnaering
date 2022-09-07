/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
      // ssr and displayName are configured by default
      styledComponents: true,
    },
    trailingSlash: true
  }
  
  module.exports = nextConfig