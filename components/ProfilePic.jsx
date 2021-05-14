import React from 'react'
import Image from 'next/image'
import utilStyles from "../styles/utils.module.css";

export default function ProfilePic({image}) {
  return (
    <Image
      src={image}
      height={144}
      width={144}
      alt="A profile picture of some guy"
      className={utilStyles.borderCircle}
    ></Image>
  )
}

