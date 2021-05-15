import React from 'react'

// TODO: make this render outside the __next component
export default function CloudflareAnalytics({token}) {
  return(
    <>
      <script defer src='https://static.cloudflareinsights.com/beacon.min.js' 
      data-cf-beacon={'{"token": "'+ token + '"}'}></script>
    </>
  )
}
