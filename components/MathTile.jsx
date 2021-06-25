import React, { useState } from "react";
import useSWR from "swr";
import Link from "next/link";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function MathTile({ mathUrl, desc }) {
  const numToSend = Math.floor(Math.random() * 100);

  const { data, error } = useSWR(`/api/math/isEven/${numToSend}`, fetcher);

  const head = (
    <>
      Route: <Link href={mathUrl}>{mathUrl}</Link>
      <div>
        <strong>Discription: </strong>
        {desc}
      </div>
      <div>
        <strong>Number: </strong> {numToSend}
      </div>
    </>
  );

  if (error) {
    return (
      <div>
        {head}
        <div>Failed to Load</div>
      </div>
    );
  }

  if (!data) {
    return (
      <div>
        {head}
        <div>...Loading</div>
      </div>
    );
  }

  return (
    <div>
      {head}
      <div>
        <strong>Result: </strong>
        {data.toString()}
      </div>
    </div>
  );
}
