import AllPosts from '../../components/posts/all-posts';
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
export default function AllPostsPage() {
  return (
    <AllPosts posts={DUMMY_POSTS} />
  )
}