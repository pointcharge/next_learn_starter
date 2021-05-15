import React from "react";
import RenderingStrageties from "../../components/RenderingStrageties";
import RenderPage from "../../components/RenderPage";
import { getRandomUser } from "../../lib/getRandomUser";

export async function getStaticProps() {
  const { name, profilePicture } = await getRandomUser();

  return {
    props: {
      name,
      profilePicture,
    },
  };
}

export default function StaticGeneration({ name, profilePicture }) {
  const pageText = (
    <>
      <div>
        This page uses static generation with data fetching by using
        getStaticProps(). That means that during build time, it retireves the
        data from the Random User API and generates the HTML with the text and
        images.
      </div>
      <br />
      <div>
        Static generation should be used on pages where the information on it
        doesn't change often, like an about page. It offers good SEO since
        Google's regular crawlers can see whats on the website without having to
        use the JS bots. Also, since the static site isn't changing, a CDN can
        easily cache the website and quickly serve the website to the user.
      </div>
      <br />
      <div>
        Everybody who visits this site will see the same name and image of the
        person when we fetched the data at build time. Refreshing the page will
        show the same exact page.
      </div>
      <br />
      <div>
        <strong>Note:</strong> This will not work in a dev enviornment. If you
        run this in a dev enviornment, then getStaticProps() will get called on
        every request and every time you navigate to this page, a new user is
        fetched.
      </div>

      <RenderingStrageties></RenderingStrageties>
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
