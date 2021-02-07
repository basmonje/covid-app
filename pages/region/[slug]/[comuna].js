import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getComunasBySlugAndRegion } from "../../../src/api/corona";
import Hero from "../../../src/section/Hero";

export default function Comuna({ data }) {
  return <div>{data && <Hero data={data} title={data.name} />}</div>;
}

export async function getServerSideProps(context) {
  const { slug, comuna } = context.params;
  const response = await getComunasBySlugAndRegion(slug, comuna);
  return {
    props: {
      data: response,
    }, // will be passed to the page component as props
  };
}
