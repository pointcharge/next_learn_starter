import React from "react";
import Layout from "../../components/Layout";
import ProfilePic from "../../components/ProfilePic";
import useSWR from "swr";
import RenderingStrageties from "../../components/RenderingStrageties";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ClientSideRendering() {
  // console.log(randomUser.results[0].name);
  // console.log(randomUser.results[0]);
  // console.log(randomUser.results[0].picture.thumbnail);

  const url = "https://randomuser.me/api";

  const { data, error } = useSWR(url, fetcher);

  const text = (
    <>
      <div>
        This page uses client side rendering by using swr(). By using swr(), you
        first get a static html page without any data. Then the client will call
        and retireves the data from the Random User API and populates the page
        with the text and images from the API. swr() is a little more
        complecated than that, but that's just the basics.
      </div>
      <br />
      <div>
        Everybody who visits this site will see a different user. Refreshing the
        page will make you call the API again and send an updated page.
      </div>
      <br />
      <div>
        Client side generation should be used on websites where the data is
        specific to a certain user. Their data changes constantly and needs to
        be up-to-date with every request. This method of rendering is bad for
        SEO, since Google has to use their JS bots to see what is on the
        website.
      </div>
      <br />
      <div>
        This is the normal way react and create-react-app renders a page. It
        should be used on private, user-specific pages where SEO is not
        relevant. Without JS, this page will not load anything that has not been
        staticly generated.
      </div>
    </>
  );

  if (error)
    return (
      <Layout>
        <div>Failed to Load</div>
        <RenderingStrageties></RenderingStrageties>
      </Layout>
    );

  if (!data)
    return (
      <Layout>
        <div>loading...</div>
        <br />
        <br />

        {text}
        <RenderingStrageties></RenderingStrageties>
      </Layout>
    );

  console.log("Loaded");

  return (
    <Layout>
      <section>
        <h2>
          Hello {data.results[0].name.title} {data.results[0].name.first}{" "}
          {data.results[0].name.last}
        </h2>
      </section>
      <ProfilePic image={data.results[0].picture.large}></ProfilePic>
      <br />
      <br />
      {text}
      <RenderingStrageties></RenderingStrageties>
    </Layout>
  );
}
