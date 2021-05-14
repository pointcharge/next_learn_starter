import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";

// Only during compilation on Node
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import RenderingStrageties from "../components/RenderingStrageties";

export async function getStaticProps() {
  // NOTE: This is running in NODE not on the client

  // In here we can do anything - like fetching from an API, database, etc bc it runs in Node
  // In dev, this runs on every request
  // In prod, this only runs during compilation
  // Also, this func only runs in pages, not in components
  const allPostsData = getSortedPostsData();
  return {
    // This component will have access to this data in props.allPostsData
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>

      <RenderingStrageties></RenderingStrageties>

      <section>
        <h2>Older Pages</h2>
        <div>
          <Link href="/posts">Posts</Link>
        </div>
        <div>
          <Link href="posts/first-post">First Post</Link>
        </div>
      </section>
    </Layout>
  );
}
