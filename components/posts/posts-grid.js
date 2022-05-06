import classes from "./posts-grid.module.css";
export default function PostsGrid(props) {
  const { posts } = props;
  return (
    <ul claaName={classes.grid}>
      {posts.map((post) => {
        <PostItem />;
      })}
    </ul>
  );
}
