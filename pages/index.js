import { Container, Text } from "../src/component";
import Hero from "../src/section/Hero";
import Metric from "../src/section/Metric";
import { useCorona } from "../src/api/corona";
import Chart from "../src/section/Chart";

export default function Home({ data }) {
  return (
    <div className="home">
      <Container>
        <Text title="Corona Virus en Chile" />
      </Container>
      <Hero data={data} />
      <Chart data={data.series.activos} />
      <Metric data={data.regiones} />
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
