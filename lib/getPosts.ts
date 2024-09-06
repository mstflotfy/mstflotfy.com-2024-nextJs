import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export function getSortedPosts(directory: string) {
  const postsDir = path.join(process.cwd(), directory)

  // Get file names under the specified directory
  const files = fs.readdirSync(postsDir)
  
  const posts = files.map((fileName) => {
    // Remove .md or .mdx from file name to get id
    const id = fileName.replace(/\.(md|mdx)$/, '')
    
    // Read markdown file as string
    const fullPath = path.join(postsDir, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    
    // Use gray-matter to parse the post metadata section
    const { data: frontmatter } = matter(fileContents)
    
    // Combine the data with the id and content
    return {
      id,
      frontmatter,
    }
  })
  
  // Sort posts by date (more recent on top)
  return posts.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date)
    const dateB = new Date(b.frontmatter.date)
    
    return dateB.getTime() - dateA.getTime() // Sort in descending order (newest first)
  })
}