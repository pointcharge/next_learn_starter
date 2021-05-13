import React from 'react'
import Image from 'next/image'

export default function ProfilePic() {
  return (
    <Image
      src="/images/profile.jpg"
      height={144}
      width={144}
      alt="modern architecture"
    ></Image>
  )
}

