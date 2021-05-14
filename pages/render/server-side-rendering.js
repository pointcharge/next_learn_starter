import React from "react";
import Layout from "../../components/Layout";
import ProfilePic from "../../components/ProfilePic";
import RenderingStrageties from "../../components/RenderingStrageties";

export async function getServerSideProps() {
  const res = await fetch("https://randomuser.me/api");
  const randomUser = await res.json();

  return {
    props: {
      randomUser,
    },
  };
}

export default function ServerSideGenerated({ randomUser }) {
  // console.log(randomUser.results[0].name);
  // console.log(randomUser.results[0]);
  // console.log(randomUser.results[0].picture.thumbnail);
  return (
    <Layout>
      <div>
        This page uses server side generation. It fetches data using
        getServerSideProps(). That means that during a request to the server, it
        retireves the data from the Random User API and generates the html with
        the text and images. Then the server sends the page back to the user.
      </div>
      <br />
      <div>
        Everybody who visits this site will see a different user. Refreshing the
        page will make the server call the API again and send an updated page.
      </div>

      <section>
        <h2>
          Hello {randomUser.results[0].name.title}{" "}
          {randomUser.results[0].name.first} {randomUser.results[0].name.last}
        </h2>
      </section>
      <ProfilePic image={randomUser.results[0].picture.large}></ProfilePic>

      <RenderingStrageties></RenderingStrageties>
    </Layout>
  );
}
