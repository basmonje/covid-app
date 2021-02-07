import React from "react";
import { getRegionBySlug, useCorona } from "../../../src/api/corona";

export default function Comunas() {
  return (
    <div>
      <h1>Comunas</h1>
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      response: "nuevo",
    },
  };
}
