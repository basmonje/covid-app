import React from "react";
import { Container, Card, Grid } from "../../component";
import TitleCard from "../../component/Card/Title";

export default function Hero(props) {
  const { data } = props;

  return (
    <div className="hero padding-top">
      <Container>
        <TitleCard title="Casos en todo Chile" />
        <Grid>
          <Card
            label="Activos"
            value={data.activos.value}
            tooltip={data.activos.date}
          />
          <Card
            label="Confirmados"
            value={data.confirmados.value}
            tooltip={data.confirmados.date}
          />
          <Card
            label="Fallecidos"
            value={data.fallecidos.value}
            tooltip={data.fallecidos.date}
          />
        </Grid>
      </Container>
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
