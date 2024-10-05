import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const baseUrl = 'https://mstflotfy.com'; // Replace with your actual base URL

interface PostData {
  slug: string;
  lastModified: string;
}

// Function to get all post slugs and their last modified dates
const getPostData = (): PostData[] => {
  const postsDirectory = path.join(process.cwd(), 'app/posts/theindiedev');
  try {
    const files = fs.readdirSync(postsDirectory);
    return files.map(filename => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);
      return {
        slug: filename.replace('.mdx', ''),
        lastModified: data.lastModified || fs.statSync(filePath).mtime.toISOString(),
      };
    });
  } catch (error) {
    console.error('Error reading post directory:', error);
    return [];
  }
};

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPostData();

  // Define the static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/oneexercise`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${baseUrl}/theindiedev`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
  ];

  // Add dynamic routes for each post
  const postRoutes: MetadataRoute.Sitemap = posts.map(post => ({
    url: `${baseUrl}/theindiedev/${post.slug}`,
    lastModified: new Date(post.lastModified),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  return [...staticRoutes, ...postRoutes];
}

// Incremental Static Regeneration
export const revalidate = 3600; // revalidate every hour