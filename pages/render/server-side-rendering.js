import React from "react";
import RenderingStrageties from "../../components/RenderingStrageties";
import { getRandomUser } from "../../lib/getRandomUser";
import RenderPage from "../../components/RenderPage";

export async function getServerSideProps() {
  const { name, profilePicture } = await getRandomUser();

  return {
    props: {
      name,
      profilePicture,
    },
  };
}

export default function ServerSideGenerated({ name, profilePicture }) {
  const pageText = (
    <>
      <div>
        This page uses server side generation. It fetches data using
        getServerSideProps(). That means that during a request to the server, it
        retireves the data from the Random User API and generates the HTML with
        the text and images. Then the server sends the page back to the user.
      </div>
      <br />
      <div>
        Static side generation should be used on websites where the data changes
        constantly and needs to be up-to-date with every request, like a news
        website. It also allows has the some of same benefits as static site
        generation for SEO, like allowing Google's regular crawlers can see
        whats on the website without having to use the JS bots. However, it can
        be slower for users since the server has to generate a new HTML file for
        every request.
      </div>
      <br />
      <div>
        Everybody who visits this site will see a different user. Refreshing the
        page will make the server call the API again and send an updated page.
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
