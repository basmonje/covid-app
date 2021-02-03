import { Container, Text } from "../src/component";
import Hero from "../src/section/Hero";
import Metric from "../src/section/Metric";
import { useCorona } from "../src/api/corona";
import Chart from "../src/section/Chart";
import SEO from "../src/section/SEO";

export default function Home({ data }) {
  return (
    <div className="home">
      <SEO color="#1b262c" />
      <Container>
        <Text title="Covid en Chile" />
      </Container>
      <Hero data={data} />
      <Chart data={data.series.activos} />
      <Metric data={data} />
    </div>
  );
}

export async function getStaticProps(context) {
  const response = await useCorona();
  return {
    props: {
      data: response,
    }, // will be passed to the page component as props
  };
}
