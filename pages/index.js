import { Fragment } from "react";
import Head from "next/head";

import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../helpers/posts-util";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title> Oskar Wiesiolek Website</title>
        <meta
          name="Oskar Wiesiolek Website"
          content="Oskar Wiesiolek - web development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    // revalidate: 1800,
  };
}

export default HomePage;
