import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import RenderingStragetiesList from "../components/RenderingStragetiesList";
import Date from "../components/Date";

// Only during compilation on Node
import { getSortedPostsData } from "../lib/posts";

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
          (This is a sample website - you’ll be building a site like this on
          <a href="https://nextjs.org/learn"> our Next.js tutorial</a>.)
        </p>
        <div>
          This website also has examples of the four most common rendering
          strageties that Next.js offers when working with an external API:
          <RenderingStragetiesList />
        </div>
      </section>

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Older Example Pages</h2>
        <div>
          <Link href="/posts">Posts</Link>
        </div>
        <div>
          <Link href="/posts/first-post">First Post</Link>
        </div>
      </section>
    </Layout>
  );
}
