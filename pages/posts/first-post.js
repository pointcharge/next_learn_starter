import Link from 'next/link'
import React from 'react'
import ProfilePic from "../../components/ProfilePic"

export default function FirstPost() {
  return (
    <>
      <h1>
        First Post
      </h1>
      <ProfilePic></ProfilePic>
      <Link href="/">Go back to home</Link>
    </>

  )
}
