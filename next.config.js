/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig