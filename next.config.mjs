/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_ACTIONS || false;

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  assetPrefix: isGithubPages ? '/oztrump/' : '',
  basePath: isGithubPages ? '/oztrump' : '',
  images: {
    unoptimized: true,
  },
  publicRuntimeConfig: {
    basePath: isGithubPages ? '/oztrump' : '',
  },
};

export default nextConfig;
