import Link from 'next/link'
import React from 'react'

export default function index() {
  return (
    <div>
      <Link href="/posts/first-post">First Post</Link>
    </div>
  )
}

