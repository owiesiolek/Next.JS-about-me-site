import { Fragment } from "react";
import Head from "next/head";

import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../helpers/posts-util";

function PostDetailPage(props) {
  return (
  <Fragment>
    <Head>
      <title>{props.post.title}</title>
      <meta name='description' content={props.post.excerpt} />
    </Head>
  <PostContent post={props.post}/>;
  </Fragment>
  )
}

export function getStaticProps(context) {
  // context is needed as we can get params out of context,
  // it got a params key, with an object that contains values of dynamic segments
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

// we need to use getStaticPaths as we need to know concrete slug values to pregenerate
export function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetailPage;
