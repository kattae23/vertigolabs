/** @type {import('next').NextConfig} */
const dns = require('dns')

dns.setDefaultResultOrder('ipv4first')
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**'
      },
      {
        protocol: 'http',
        hostname: '190.114.9.42',
        port: '3000',
        pathname: '/**'
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '3000',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'vertigolabs.site',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**'
      }
    ]
  }
}

module.exports = nextConfig
