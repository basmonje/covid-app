import React from "react";
import { Container, Grid, Card } from "../../component";

export default function Comunas(props) {
  const { data } = props;
  const array = [data];
  return (
    <div className="tarjetas">
      <Container>
        <h1>Regiones</h1>
        <Grid>
          <Card
            label="Antofagasta"
            value={data.Antofagasta.activos.value}
            tooltip={data.Antofagasta.activos.date}
          />
        </Grid>
      </Container>
      <style jsx>{`
        .tarjetas {
          padding-top: 100px;
          width: 100%;
        }

        h1 {
          padding-bottom: 1rem;
        }
      `}</style>
    </div>
  );
}
