import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');
function getPostData(fileName) {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)
  const postSlug = fileName.replace(/\.md$/, '');
  return {
    slug: postSlug,
    ...data,
    content
  }
}
export function getAllPosts() {
  const postFiles = fs.readdirSync(postsDirectory)
  const allPosts = postFiles.map(postFile => {
    return getPostData(postFile);
  })
  const sortedPosts = allPosts.sort((postA, postB) => postA.dat > postB.date ? -1 : 1);
  return sortedPosts
}
export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  return allPosts.filter(post => post.isFeatured)
}
