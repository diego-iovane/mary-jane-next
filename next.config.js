/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de"],
  },
  images: {
    domains: [ 'firebasestorage.googleapis.com' ]
  }
}

module.exports = nextConfig
