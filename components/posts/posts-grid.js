import PostItem from "./post-item";
import classes from "./posts-grid.module.css";

function PostsGrid(props) {
  // props would be most likely an array full of objects
  // posts will have all needed data
  const { posts } = props;

  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}

export default PostsGrid;
