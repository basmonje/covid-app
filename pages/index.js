import { Container, Text } from "../src/component";
import { useCorona } from "../src/api/corona";
import Hero from "../src/section/Hero";
import Metric from "../src/section/Metric";
import Navigator from "../src/section/Navbar/Navigation";
import SEO from "../src/section/SEO";
import Information from "../src/section/Information";

export default function Home({ data }) {
  return (
    <div className="home">
      <SEO color="#1b262c" />
      <Information />
      <Navigator />
      <Hero title="Chile" data={data} />
      <Metric data={data.regiones} type="home" />
    </div>
  );
}

export async function getStaticProps(context) {
  const response = await useCorona();
  return {
    props: {
      data: response,
    },
  };
}
