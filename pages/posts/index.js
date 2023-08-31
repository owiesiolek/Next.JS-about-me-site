import { Fragment } from "react";
import Head from "next/head";

import AllPosts from "../../components/posts/all-posts";

import { getAllPosts } from "../../helpers/posts-util";

function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Projects</title>
        <meta
          name="Oskar Wiesiolek - projects"
          content="A list of programming and web development projects!"
        />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 1800,
  };
}

export default AllPostsPage;
