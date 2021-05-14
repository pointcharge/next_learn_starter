import Link from 'next/link'
import React from 'react'

export default function RenderingStrageties() {
  return (
    <div>
              <h2>Examples of Rendering Strageties</h2>

        <div>
          <Link href="/render/static-generation">
            Static Generation With Data
          </Link>
        </div>
        <div>
          <Link href="/render/server-side-rendering">
            Server Side Rendering
          </Link>
        </div>
        <div>
          <Link href="/render/client-side-rendering">
            Client Side Rendering
          </Link>
        </div>
        {/* <div>
          <Link href="/render/incremental-static-regeneration">
            Incremental Static Regeneration
          </Link>
        </div> */}
    </div>
  )
}
