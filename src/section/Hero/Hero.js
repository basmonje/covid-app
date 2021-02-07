import React from "react";
import { Element } from "react-scroll";
import { Container, Card, Grid } from "../../component";
import Breadcrumb from "../../component/Breadcrumb";
import Chart from "../Chart";

export default function Hero(props) {
  const { data, title = "Chile", region, comuna } = props;

  const utils = {
    chile: title,
    region: region,
    comuna: comuna,
  };

  return (
    <div className="hero padding-top">
      <Element name="hero">
        <Container>
          <Breadcrumb data={utils} />
          <Grid>
            <Card
              label="Activos"
              value={data.activos.value}
              tooltip={data.activos.date}
              type="hero"
            />
            <Card
              label="Confirmados"
              value={data.confirmados.value}
              tooltip={data.confirmados.date}
              type="hero"
            />
            <Card
              label="Fallecidos"
              value={data.fallecidos.value}
              tooltip={data.fallecidos.date}
              type="hero"
            />
          </Grid>
        </Container>
        <Chart data={data.series.activos} />
      </Element>
      <style jsx>{`
        .hero {
          width: 100%;
        }

        .title {
          padding-bottom: 1rem;
        }
      `}</style>
    </div>
  );
}
