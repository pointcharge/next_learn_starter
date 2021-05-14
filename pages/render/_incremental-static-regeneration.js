import React from "react";
import Layout from "../../components/Layout";
import ProfilePic from "../../components/ProfilePic";
import RenderingStrageties from "../../components/RenderingStrageties";

const regenTime = 10;

export async function getStaticProps() {
  const res = await fetch("https://randomuser.me/api");
  const randomUser = await res.json();

  return {
    props: {
      randomUser,
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every regenTime seconds
      revalidate: regenTime,
    },
  };
}

// NOTE: This is not working as intended. I'll have to read up more on
// how icr works
export default function IncrementalStaticRegeneration({ randomUser }) {
  return (
    <Layout>
      <div>
        <a
          href="https://blog.logrocket.com/incremental-static-regeneration-with-next-js/"
          target="_blank"
        >
          From the LogRocket blog:
        </a>
      </div>
      <dir>
        Incremental Static Regeneration (ISR) is a newly released feature that
        allows the regeneration of static pages during runtime. It’s a hybrid
        solution of SSG and SSR.
      </dir>
      <br />

      <div>
        This page uses incremental static regeneration. getStaticProps(). That
        means that during build time, it retireves the data from the Random User
        API and generates the html with the text and images.
      </div>
      <br />
      <div>
        Everybody who visits this site within {regenTime} seconds will see the
        same name and image of the person when we fetched the data at build
        time. When a new request comes in after {regenTime} seconds, Next.js
        will regenarate the HTML in the background.
      </div>

      <section>
        <h2>
          Hello {randomUser.results[0].name.title}{" "}
          {randomUser.results[0].name.first} {randomUser.results[0].name.last}
        </h2>
      </section>
      <ProfilePic image={randomUser.results[0].picture.large}></ProfilePic>

      <RenderingStrageties></RenderingStrageties>

      <section>
        <h2>Other Resources on Incremental Static Regeneration</h2>{" "}
        <div>
          <a href="https://arunoda.me/blog/what-is-nextjs-issg" target="_blank">
            https://arunoda.me/blog/what-is-nextjs-issg
          </a>
        </div>
      </section>
    </Layout>
  );
}
