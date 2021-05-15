import { useRouter } from 'next/router'
import React from 'react'
import Layout from './Layout';
import ProfilePic from './ProfilePic';

export default function RenderPage({name, profilePicture, pageText}) {

  const {isFallback}  = useRouter();

  if (isFallback) {
    return (
      <Layout>
        <div>Loading...</div>
        <br></br>
        {pageText}
      </Layout>

    )
  }

  return (
    <Layout>
      <section>
        <h2>
          Hello {name}
        </h2>
      </section>
      <ProfilePic image={profilePicture}></ProfilePic>
      <br />
      <br />
      {pageText}
    </Layout>
  )
}
