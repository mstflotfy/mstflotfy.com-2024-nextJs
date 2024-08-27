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
        permanent: true, // 301 redirect
      },
      {
        source: '/design/:slug*', // Matches any article under /design/
        destination: '/theindiedev/:slug*', // Redirects to the new path
        permanent: true, // 301 redirect
      },
    ];
  },
}
 
const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
