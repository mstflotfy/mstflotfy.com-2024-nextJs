import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  transpilePackages: ['next-mdx-remote'],

  // Add the redirects function
  async redirects() {
    return [
      {
        source: '/dev/:slug*', // Matches any article under /dev/
        destination: '/theindiedev/:slug*', // Redirects to the new path
        permanent: true, // 308 redirect (should preserve request and pass seo link juice)
      },
      {
        source: '/design/:slug*', // Matches any article under /design/
        destination: '/theindiedev/:slug*', // Redirects to the new path
        permanent: true, // 308 redirect
      },
      {
        source: '/dev',
        destination: '/theindiedev',
        permanent: true
      },
      {
        source: '/design',
        destination: '/theindiedev',
        permanent: true
      },
    ];
  },
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

// Merge MDX config with Next.js config
export default withNextVideo(withMDX(nextConfig), { folder: 'public/videos' });