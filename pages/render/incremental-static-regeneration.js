import React from "react";
import RenderingStrageties from "../../components/RenderingStrageties";
import RenderPage from "../../components/RenderPage";
import { getRandomUser } from "../../lib/getRandomUser";

const regenTime = 10;

export async function getStaticProps() {
  const { name, profilePicture } = await getRandomUser();

  return {
    props: {
      name,
      profilePicture,
    },
    revalidate: regenTime,
  };
}

export default function IncrementalStaticRegeneration({
  name,
  profilePicture,
}) {
  const pageText = (
    <>
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
        will regenarate the HTML in the background and you will see a new user.
      </div>
      <br />
      <div>
        <strong>Note:</strong> This will not work in a dev enviornment. If you
        run this in a dev enviornment, then getStaticProps() will get called on
        every request and every time you navigate to this page, a new user is
        fetched.
      </div>

      <RenderingStrageties></RenderingStrageties>

      <section>
        <h2>Other Resources on Incremental Static Regeneration</h2>{" "}
        <div>
          <a href="https://arunoda.me/blog/what-is-nextjs-issg" target="_blank">
            https://arunoda.me/blog/what-is-nextjs-issg
          </a>
        </div>
      </section>
    </>
  );

  return (
    <RenderPage
      name={name}
      profilePicture={profilePicture}
      pageText={pageText}
    ></RenderPage>
  );
}
