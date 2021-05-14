import React from "react";
import Layout from "../../components/Layout";
import ProfilePic from "../../components/ProfilePic";
import RenderingStrageties from "../../components/RenderingStrageties";

export async function getStaticProps() {
  const res = await fetch("https://randomuser.me/api");
  const randomUser = await res.json();

  return {
    props: {
      randomUser,
    },
  };
}

export default function StaticGeneration({ randomUser }) {
  // console.log(randomUser.results[0].name);
  // console.log(randomUser.results[0]);
  // console.log(randomUser.results[0].picture.thumbnail);
  return (
    <Layout>
      <div>
        This page uses static generation with data fetching by using
        getStaticProps(). That means that during build time, it retireves the
        data from the Random User API and generates the html with the text and
        images.
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
