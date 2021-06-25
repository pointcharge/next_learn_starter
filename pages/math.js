import React from "react";
import { getMathRoutes } from "../lib/apiRoutes";
import MathTile from "../components/MathTile";

export async function getStaticProps() {
  // NOTE: This is running in NODE not on the client

  // In here we can do anything - like fetching from an API, database, etc bc it runs in Node
  // In dev, this runs on every request
  // In prod, this only runs during compilation
  // Also, this func only runs in pages, not in components
  const mathRoutes = getMathRoutes();

  return {
    // This component will have access to this data in props.allPostsData
    props: {
      mathRoutes,
    },
  };
}

export default function Math({ mathRoutes }) {
  return (
    <div>
      <MathTile
        mathUrl={mathRoutes[0].route}
        desc={mathRoutes[0].description}
      ></MathTile>
    </div>
  );
}
