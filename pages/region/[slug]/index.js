import React from "react";
import { getRegionBySlug, useCorona } from "../../../src/api/corona";
import _ from "lodash";
import Hero from "../../../src/section/Hero";
import Metric from "../../../src/section/Metric";
import SEO from "../../../src/section/SEO";

export default function Region({ response }) {
  // console.log("region0", response);
  return (
    <div>
      <SEO
        title={`${response.complete_name} ${response.activos.value} Activos`}
      />
      <Hero data={response} region={response.complete_name} />
      <Metric
        data={response.comunas}
        type="comunas"
        title="Comunas"
        region={response.slug}
      />
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
