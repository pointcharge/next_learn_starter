import React from 'react'
import Link from 'next/link'

export default function RenderingStragetiesList() {
  return (
    <ul>
        <li>
          <Link href="/render/static-generation">
            Static Generation With Data
          </Link>
        </li>
        <li>
          <Link href="/render/server-side-rendering">
            Server Side Rendering
          </Link>
        </li>
        <li>
          <Link href="/render/client-side-rendering">
            Client Side Rendering
          </Link>
        </li>
        <li>
          <Link href="/render/incremental-static-regeneration">
            Incremental Static Regeneration
          </Link>
        </li>
    </ul>
  )
}
