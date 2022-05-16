import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";
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
export default function HomePage(props) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.posts} />

    </Fragment>
  );
}
export function getStaticProps(){
  const featuredPosts=getFeaturedPosts();
  return{
    props:{
      posts:featuredPosts
    }
  }
}
