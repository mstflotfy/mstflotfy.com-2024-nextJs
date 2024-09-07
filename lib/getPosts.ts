import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export function getSortedPosts(directory: string) {
  // Use path.resolve to ensure the correct path
  const files = fs.readdirSync(path.resolve(directory));
  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join(directory, filename), 'utf-8');
    const { data: frontmatter } = matter(markdownWithMeta);
    return { frontmatter, slug: filename.replace('.mdx', '') };
  });
  
  return posts.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date)
    const dateB = new Date(b.frontmatter.date)
    
    return dateB.getTime() - dateA.getTime() // Sort in descending order (newest first)
  })
}