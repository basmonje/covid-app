import React from "react";
import { getRegionBySlug, useCorona } from "../../src/api/corona";
import _ from "lodash";
import Hero from "../../src/section/Hero";
import Metric from "../../src/section/Metric";

export default function Region({ response }) {
  console.log("response", response);
  const comunasArray = _.values(response.comunas);

  return (
    <div>
      <Hero data={response} title={response.complete_name} />
      <Metric data={response.comunas} type="comunas" title="Comunas" />
    </div>
  );
}

export async function getStaticPaths() {
  let paths = await useCorona();

  paths = paths.regiones.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const response = await getRegionBySlug(context.params.slug);
  return {
    props: {
      response,
    },
  };
}
