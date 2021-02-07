import React from "react";

export default function Comunas() {
  return <div></div>;
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
  console.log(context);
  const response = await getRegionBySlug(context.params.slug);
  return {
    props: {
      response,
    },
  };
}
