import React from "react";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/Date";
import utilStyles from "../../styles/utils.module.css";
import Head from "next/head";

// This dynamically generates posts based on the path

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  // Return a list (array) of possible value for id
  // Tells Next.js what pages exist and what to do with routing

  // In development (npm run dev or yarn dev), getStaticPaths runs on every request.

  // Like getStaticProps, getStaticPaths can fetch data from any data source. In our example,
  // getAllPostIds (which is used by getStaticPaths) may fetch from an external API endpoint:

  const paths = getAllPostIds();

  return {
    paths,
    // This tells Next.js that if a page does not exist, don't serve
    // up a fallback page, just 404
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  // we set params.id when we fetch the possible id's in getStaticPaths and call getAllPostIds
  // get the value from the md post names

  // Every page now will be given one of the objects we put in the array we make in getStaticPaths

  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}
