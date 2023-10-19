/** @type {import('next').NextConfig} */
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
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**'
      }
    ]
  },
  experimental: {
    serverActions: true
  },
  env: {
    DATABASE_URL: 'mysql://root:123456@vertigolabs.site:3306/mydb',
    NEXTAUTH_SECRET: 'lsdkmlskdmflksdkskmsdnkj',
    NEXTAUTH_URL: 'http://vertigolabs.site',
    NEXTAPIURL: 'http://vertigolabs.site',
    SECRET_KEY: 'eefeijfkskjhfuhudhfudd'
  }
}

module.exports = nextConfig
