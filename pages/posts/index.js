import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';
const DUMMY_POSTS = [
  {
    slug: "getting-started",
    title: "Getting Started",
    image: "getting-started.jpeg",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, fugit! Vel quis quas adipisci commodi placeat",
    date: "2022-05-01",
  },
  {
    slug: "getting-started2",
    title: "Getting Started",
    image: "getting-started.jpeg",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, fugit! Vel quis quas adipisci commodi placeat",
    date: "2022-05-01",
  },
  {
    slug: "getting-started2",
    title: "Getting Started",
    image: "getting-started.jpeg",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, fugit! Vel quis quas adipisci commodi placeat",
    date: "2022-05-01",
  },
  {
    slug: "getting-started2",
    title: "Getting Started",
    image: "getting-started.jpeg",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, fugit! Vel quis quas adipisci commodi placeat",
    date: "2022-05-01",
  },
]
export default function AllPostsPage(props) {
  return (
    <AllPosts posts={props.posts} />
  )
}
export function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts
    }
  }
}