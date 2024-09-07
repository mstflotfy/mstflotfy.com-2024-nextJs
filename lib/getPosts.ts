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
  
  return posts;
  // const postsDir = path.join(process.cwd(), directory)

  // // Get file names under the specified directory
  // const files = fs.readdirSync(path.resolve(postsDir))
  
  // const posts = files.map((fileName) => {
  //   // Remove .md or .mdx from file name to get id
  //   const id = fileName.replace(/\.(md|mdx)$/, '')
    
  //   // Read markdown file as string
  //   const fullPath = path.join(postsDir, fileName)
  //   const fileContents = fs.readFileSync(fullPath, 'utf8')
    
  //   // Use gray-matter to parse the post metadata section
  //   const { data } = matter(fileContents)
    
  //   // Combine the data with the id and content
  //   return {
  //     id,
  //     data,
  //   }
  // })
  
  // // Sort posts by date (more recent on top)
  // return posts.sort((a, b) => {
  //   const dateA = new Date(a.data.date)
  //   const dateB = new Date(b.data.date)
    
  //   return dateB.getTime() - dateA.getTime() // Sort in descending order (newest first)
  // })
}