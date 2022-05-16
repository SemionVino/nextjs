import classes from "./post-content.module.css";
import PostHeader from "./post-header";
import ReactMarkdown from 'react-markdown'
const DUMMY_POST = {
  slug: "getting-started",
  title: "Getting Started",
  image: "getting-started.jpeg",
  date: "2022-05-01",
  content: "# This is a first post",
};
export default function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
      
    </article>
  );
}
