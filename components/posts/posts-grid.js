import classes from "./posts-grid.module.css";
import PostItem from "./post-item";
export default function PostsGrid(props) {
  const { posts } = props;
  console.log("dfd", PostItem);
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}
